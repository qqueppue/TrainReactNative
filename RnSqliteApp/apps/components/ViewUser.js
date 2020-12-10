/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import {openDatabase} from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({name: 'Users.db'});

const ViewUSer = ({navigation}) => {
    let [userId, setInputUserid] = useState('');    //String
    let [userData, setUserData] = useState({});     //Object = 객체 (1건)
    // TaxtInput에서 userId로 받아온 값을 userData속에 집어넣음 => userData 속에 있는 값을 출력시킴

    const searchUser = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'SELECT * FROM table_user WHERE user_id = ?',
                [userId],
                (txn,res)=> {
                    console.log('record number', res.rows.length);
                    if (res.rows.length === 1) {
                        setUserData(res.rows.item(0));
                    } else {
                        alert("유저정보 없음");
                        setUserData({});
                    }
                }
            );
        });
    }; // 재확인

    const userInfo = userData.user_id ? (
        <View style={styles.info}>
            <Text children={`아이디 : ${userData.user_id}`} />
            <Text children={`유저 이름 : ${userData.user_name}`} />
            <Text children={`연락처 : ${userData.user_contact}`}/>
            <Text children={`주소 : ${userData.user_address}`} />
        </View>
    ) : (
        <View />
    );

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.view}>
                <TextInput placeholder="아이디 입력" style={styles.textinput} onChangeText={(userId) => setInputUserid(userId)}/>
                <MyButton title="검색" onButtonClick={searchUser} />
                {userInfo}
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
});

export default ViewUSer;
