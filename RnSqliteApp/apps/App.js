import * as React from 'react';
// import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import RegisterUser from './components/RegisterUser';
import ViewAllUSers from './components/ViewAllUsers';
import ViewUSer from './components/ViewUser';
import UpdateUser from './components/UpdateUser';
import DeleteUser from './components/DeleteUser';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'HOME',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle: {
              backgroundColor: '#6699ff',
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterUser}
          options={{
            title: '사용자 등록',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle: {
              backgroundColor: '#6699ff',
            },
          }}
        />
        <Stack.Screen
          name="ViewAllUSers"
          component={ViewAllUSers}
          options={{
            title: '사용자 전체 조회',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle: {
              backgroundColor: '#6699ff',
            },
          }}
        />
        <Stack.Screen
          name="ViewUSer"
          component={ViewUSer}
          options={{
            title: '사용자 조회',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle: {
              backgroundColor: '#6699ff',
            },
          }}
        />
        <Stack.Screen
          name="UpdateUser"
          component={UpdateUser}
          options={{
            title: '사용자 수정',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle: {
              backgroundColor: '#6699ff',
            },
          }}
        />
        <Stack.Screen
          name="DeleteUser"
          component={DeleteUser}
          options={{
            title: '사용자 삭제',
            headerTitleStyle: {
              fontWeight: 'bold',
              color: '#ffffff',
            },
            headerStyle: {
              backgroundColor: '#6699ff',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
