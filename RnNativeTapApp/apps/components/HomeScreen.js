/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.layoutStyle}>
                <Text children="Home UI" style={styles.text} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layoutStyle: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dfbf9f',
    },
    text: {
        fontSize: 24,
        color: '#604020',
    },
});

export default HomeScreen;
