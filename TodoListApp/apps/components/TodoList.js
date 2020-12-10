/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

import TodoItem from './TodoItem';

var db = openDatabase({name: 'TodoList.db'});

const TodoList = ({onRemove, onToggle}) => {
    let [todoItems, setTodoItems] = useState([]);

    useEffect(() => {
        db.transaction((txn) => {
            txn.executeSql(
                'SELECT * FROM table_todo',
                [],
                (tx,res) => {
                    console.log('record number : ', res.rows.length);
                    var temp = [];
                    for (var i = 0; i < res.rows.length; ++i) {
                        temp.push(res.rows.item(i));
                    }
                    setTodoItems(temp);
                }
            );
        });
    }, []);

    const TodoListItem = todoItems.map((item, index) =>
        <TodoItem key={index} onRemove={onRemove} onToggle={onToggle} />
    );

    return (
        <ScrollView contentContainerStyle={styles.listContainer}>
            {/* {todos.map(todo => (
                <TodoItem key={todo.id} {...todo} onRemove={onRemove} onToggle={onToggle} />
            ))} */}
            {TodoListItem}
            <Text children="dkssud" />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
    },
});

export default TodoList;

