/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({name: 'Users.db'});

const HomeScreen = ({navigation}) => {

    //Functional Component일 때 맨 먼저 실행되는 함수
    useEffect(() => {
    // alert('맨먼저 실행됨'); => db가 처음부터 실행되도록!
        db.transaction(function (txn) {
            txn.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",[],
                function (tx, res) {
                    console.log('item:', res.rows.length);
                    if (res.rows.length === 0) {
                    txn.executeSql('DROP TABLE IF EXISTS table_user', []);
                    txn.executeSql(`
                        CREATE TABLE IF NOT EXISTS table_user (
                             user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                           user_name TEXT NOT NULL,
                        user_contact TEXT,
                        user_address TEXT NOT NULL
                        );`,[]);
                    console.log('table regen!');
                    }
                }
            );
        });
    }, []);

    return (
        <SafeAreaView style={styles.safe}>
            <View style={styles.view}>
                <Text children="SQLite sample" style={styles.text} />
                <MyButton
                    title="사용자 등록"
                    onButtonClick={() => navigation.navigate('Register')} />
                <MyButton
                    title="사용자 전체 조회"
                    onButtonClick={() => navigation.navigate('ViewAllUSers')}/>
                <MyButton
                    title="사용자 조회"
                    onButtonClick={() => navigation.navigate('ViewUSer')} />
                <MyButton
                    title="사용자 수정"
                    onButtonClick={() => navigation.navigate('UpdateUser')} />
                <MyButton
                    title="사용자 삭제"
                    onButtonClick={() => navigation.navigate('DeleteUser')} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safe: {
        flex:1,
    },
    view: {
        flex: 1,
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
    },
});

export default HomeScreen;
