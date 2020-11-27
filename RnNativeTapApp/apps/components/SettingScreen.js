/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class SettingScreen extends Component {
    render() {
        return (
            <View style={styles.layoutStyle}>
                <Text children="Setting UI" style={styles.text} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layoutStyle: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffd699',
    },
    text: {
        fontSize: 24,
        color: '#b36b00',
    },
});

export default SettingScreen;
