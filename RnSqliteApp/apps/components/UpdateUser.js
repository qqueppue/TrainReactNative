/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import MyButton from '../controls/MyButton';

import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'Users.db'});

const UpdateUser = ({navigation}) => {
    let [userId, setInputUserid] = useState('');
    let [userName, setUserName] = useState('');
    let [userContact, setUserContact] = useState('');
    let [userAddress, setUserAddress] = useState('');

    let updateAllInfo = (name, contact, address) => {
        setUserName(name);
        setUserContact(contact);
        setUserAddress(address);
    };

    const searchUser = () => {
        db.transaction((txn) => {
            txn.executeSql(
                'SELECT * FROM table_user WHERE user_id = ?',
                [userId],
                (txn,res)=> {
                    console.log('record number', res.rows.length);
                    console.log('record ', res.rows.item(0));
                    if (res.rows.length === 1) {
                        var temp = res.rows.item(0);
                        // setUserData(res.rows.item(0));
                        updateAllInfo(temp.user_name, temp.user_contact, temp.user_address);
                    } else {
                        alert("유저정보 없음");
                        // setUserData({});
                        updateAllInfo('','','');
                        setInputUserid('');
                    }
                }
            );
        });
    }; // 재확인

    const registerUser = () => {
        // alert(`${userName}, ${userContact}, ${userAddress}`);
        if (!userId) {
            alert('유저번호를 입력하세요');
            return;
        }
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
                `UPDATE table_user SET
                user_name = ?, user_contact = ?, user_address = ?
                WHERE user_id = ?`,
                [userName, userContact,userAddress,userId],
                function(tx,res) {
                    console.log('res', res.rowsAffected);   //값의 존재 유무
                    if (res.rowsAffected > 0) {
                        Alert.alert(
                            '수정성공',
                            '사용자 수정 성공했습니다.',
                            [
                                {text: 'OK', onPress: () => navigation.navigate('HomeScreen')},
                            ],
                            { cancelable: false }
                        );
                    } else {
                        alert('수정 실패!');
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
                        <Text children="수정화면" style={styles.text} />
                        <TextInput placeholder="아이디 입력" style={styles.textinput}
                            value={userId}
                            onChangeText={(userId) => setInputUserid(userId)}
                        />
                        <MyButton
                            title="검색"
                            onButtonClick={searchUser}
                        />

                        <TextInput
                            placeholder="이름 입력"
                            onChangeText={(userName) => setUserName(userName)}
                            value={userName}
                            maxLength={20}
                            style={styles.textinput}
                        />
                        <TextInput
                            placeholder="핸드폰 번호입력"
                            onChangeText={(userContact) => setUserContact(userContact)}
                            value={userContact}
                            maxLength={15}
                            keyboardType="numeric"
                            style={styles.textinput}
                        />
                        <TextInput
                            placeholder="주소입력"
                            onChangeText={(userAddress) => setUserAddress(userAddress)}
                            value={userAddress}
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

export default UpdateUser;
