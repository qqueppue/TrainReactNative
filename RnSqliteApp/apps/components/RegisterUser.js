/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import MyButton from '../controls/MyButton';

import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'Users.db'});

const RegisterUser = ({navigation}) => {
    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userAddress, setUserAddress] = useState('');

    const registerUser = () => {
        // alert(`${userName}, ${userContact}, ${userAddress}`);
        if (userName.length === 0) {
            alert('이름을 입력하세요');
            return;
        }
        if (userContact.length === 0) {
            alert('번호를 입력하세요');
            return;
        }
        if (userAddress.length === 0) {
            alert('주소를 입력하세요');
            return;
        }
        console.log(userName, userContact, userAddress);

        // DB 처리
        db.transaction(function(txn) {
            txn.executeSql(
                `INSERT INTO table_user
                    (user_name, user_contact, user_address)
                 VALUES
                    (?,?,?)`,
                [userName, userContact,userAddress],
                function(tx,res) {
                    console.log('res', res.rowsAffected);   //값의 존재 유무
                    if (res.rowsAffected > 0) {
                        Alert.alert(
                            '등록성공',
                            '사용자 등록 성공했습니다.',
                            [
                                {text: 'OK', onPress: () => navigation.navigate('HomeScreen')},
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert('등록 실패!');
                    }
                }
            );
        });

    };

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.view}>
                <ScrollView>
                    <KeyboardAvoidingView>
                        <Text children="조회 화면" style={styles.text} />
                        <TextInput
                            placeholder="이름 입력"
                            onChangeText={(userName) => setUserName(userName)}
                            maxLength={20}
                            style={styles.textinput}
                        />
                        <TextInput
                            placeholder="핸드폰 번호입력"
                            onChangeText={(userContact) => setUserContact(userContact)}
                            maxLength={15}
                            keyboardType="numeric"
                            style={styles.textinput}
                        />
                        <TextInput
                            placeholder="주소입력"
                            onChangeText={(userAddress) => setUserAddress(userAddress)}
                            maxLength={50}
                            style={styles.textinput}
                        />
                        <MyButton
                            title="저장"
                            onButtonClick={() => {registerUser();}} />
                        <MyButton
                            title="취소"
                            onButtonClick={() => navigation.navigate('HomeScreen')} />
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex:1,
    },
    view: {
        flex:1,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
    },
    textinput: {
        borderBottomWidth: 1,
        borderBottomColor: 'blue',
        margin: 10,
        fontSize: 16,
    },
});

export default RegisterUser;
