/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

import MyButton from '../controls/MyButton';

var db = openDatabase({name: 'Users.db'});

const ViewAllUSers = ({navigation}) => {
    let [listItems, setListItems] = useState([]);

    useEffect(() => {
        db.transaction((txn) => {
            txn.executeSql(
                'SELECT * FROM table_user',
                [],
                (txn,res)=> {
                    console.log('record number', res.rows.length);
                    var temp = [];
                    for (var i = 0; i < res.rows.length; i++) {
                        temp.push(res.rows.item(i));
                    }
                    setListItems(temp);
                }
            );
        });
    }, []); // 재확인

    const newListItems = listItems.map((item, index) =>   //index가 key 값을 대신하기 때문에 반드시 작성해야함
                            <View key={index} style={styles.board}>
                                <Text children={item.user_name} />
                                <Text children={item.user_contact} />
                                <Text children={item.user_address} />
                            </View>);

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView>
                <View style={styles.view}>
                {newListItems}
                </View>
                <MyButton title="Home으로" onButtonClick={() => navigation.navigate('HomeScreen')} />
            </ScrollView>
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
});

export default ViewAllUSers;
