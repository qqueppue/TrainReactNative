/* eslint-disable prettier/prettier */
import React from 'react';

import {createAppContainer} from 'react-navigation';
// import {createBottomTabNavigator, createMaterialTopTabNavigator} from 'react-navigation-tabs';
// import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './components/HomeScreen';
import DetailScreen from './components/DetailScreen';
import SettingScreen from './components/SettingScreen';
import { View } from 'react-native';

const TapNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={{color: tintColor}} size={25} name={'home'} />
        </View>
      ),
      activeColor: '#dc143c',
      inactivateColor: '#000000',
      barStyle: {backgroundColor:'#c0ffcb'},
    },
  },
  Detail: {screen: DetailScreen,
    navigationOptions: {
      tabBarLabel: 'Detail',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={{color: tintColor}} size={25} name={'apps'} />
        </View>
      ),
      activeColor: '#000000',
      inactivateColor: '#226557',
      barStyle: {backgroundColor:'#b0c4de'},
    }},
  Setting: {screen: SettingScreen,
    navigationOptions: {
      tabBarLabel: 'Setting',
      tabBarIcon: ({tintColor}) => (
        <View>
          <Icon style={{color: tintColor}} size={25} name={'settings'} />
        </View>
      ),
      activeColor: '#14dc3c',
      inactivateColor: '#226557',
      barStyle: {backgroundColor:'#ffc0cb'},
    },
  },
},
{
  initialRouteName: 'Home',
  shifting: true,
},
);

export default createAppContainer(TapNavigator);
