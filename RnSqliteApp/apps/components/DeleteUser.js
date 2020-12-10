/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import {openDatabase} from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({name: 'Users.db'});

const DeleteUser = ({navigation}) => {
    let [userId, setInputUserid] = useState('');    //String

    const deleteUser = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'DELETE FROM table_user WHERE user_id = ?',
                [userId],
                (txn,res)=> {
                    console.log('res :', res.rowsAffected);
                    if (res.rowsAffected > 0) {
                        Alert.alert(
                            '삭제성공',
                            '사용자 삭제 성공했습니다.',
                            [
                                {text: 'OK', onPress: () => navigation.navigate('HomeScreen')},
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert('삭제 실패!');
                    }
                }
            );
        });
    }; // 재확인

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.view}>
                <Text children="삭제 화면" style={styles.text} />
                <TextInput placeholder="아이디 입력" style={styles.textinput} onChangeText={(userId) => setInputUserid(userId)}/>
                <MyButton title="삭제" onButtonClick={deleteUser} />
            </View>
            <MyButton title="Home으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex: 1,
    },
    view: {
        flex:1 ,
    },
    board: {
        borderBottomColor: '#0000ff',
        borderBottomWidth: 1,
    },
    textinput: {
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
        margin: 10,
        fontSize: 16,
    },
    info: {
        margin: 10,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
    },
});

export default DeleteUser;
