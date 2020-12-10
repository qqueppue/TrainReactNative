import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar, View} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

var db = openDatabase({name: 'TodoList.db'});

const App = () => {
  const [toggleItem, setToggleItem] = useState('');

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        `SELECT name 
           FROM sqlite_master
          WHERE type='table'
            AND name='table_todo'`,
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length === 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_todo', []);
            txn.executeSql(
              `CREATE TABLE IF NOT EXISTS table_todo (
                     id	INTEGER PRIMARY KEY AUTOINCREMENT,
                content	TEXT NOT NULL,
                checked	TEXT NOT NULL,
              )`,
              [],
            );
            console.log('table regen!');
          }
        },
      );
    });
  }, []);

  // todos: {id: 1, textValue: 'todoitem', checked: true/false }
  // const [todos, setTodos] = useState([]); // select * from ~

  // 할일 목록 추가
  const addTodo = (text) => {
    // setTodos([
    //   ...todos,
    //   {id: todos.length + 1, textValue: text, checked: false},
    // ]);

    setToggleItem('false');
    db.transaction(function (txn) {
      txn.executeSql(
        `INSERT INTO table_todo
                (content, checked)
         VALUES (?, ?)`,
        [text, toggleItem],
        function (tx, res) {
          console.log('res', res.rowsAffected);
          if (res.rowsAffected > 0) {
            console.log('성공');
          } else {
            console.log('실패');
          }
        },
      );
    }, []);
  };

  function onRemove(id) {
    console.log(`delete id => ${id}`);
    // setTodos(todos.filter((todo) => todo.id !== id));

    // Axios DB 처리 (delete)
    db.transaction(function (txn) {
      txn.executeSql('DELETE FROM table_todo WHERE id = ?', [id], (tx, res) => {
        console.log('res : ', res.rowsAffected);
        if (res.rowsAffected > 0) {
          console.log('삭제 성공');
        } else {
          console.log('삭제 실패');
        }
      });
    });
  }

  const onToggle = (id) => {
    console.log(`App / toggle id => ${id}`);
    // console.log('App onToggle before => ', todos);
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? {...todo, checked: !todo.checked} : todo,
    //   ),
    // );
    db.transaction(function (txn) {
      txn.executeSql(
        'SELECT checked FROM table_todo WHERE id = ?',
        [id],
        function (tx, res) {
          console.log('toggle : ', res.rows.item(0));
          if (res.rows.item(0) === 'false') {
            setToggleItem('true');
            console.log('checked true');
          } else {
            setToggleItem('false');
            console.log('checked false');
          }
        },
      );
    });

    // Axios DB 처리 (update)
    db.transaction(function (txn) {
      txn.executeSql(
        'UPDATE table_todo SET checked = ? WHERE id = ?',
        [toggleItem, id],
        function (tx, res) {
          console.log('res : ', res.rowsAffected);
          if (res.rowsAffected > 0) {
            console.log('toggle update 성공');
          } else {
            console.log('toggle update 실패');
          }
        },
      );
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text children="Todo List" style={styles.appTitle} />
        <View style={styles.card}>
          <TodoInsert onAddTodo={addTodo} />
          <TodoList onRemove={onRemove} onToggle={onToggle} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b3b3',
  },
  appTitle: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: 'white',
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
  },
});

export default App;
