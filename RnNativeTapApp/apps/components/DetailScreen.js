/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.layoutStyle}>
                <Text children="Detail UI" style={styles.text} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layoutStyle: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffecb3',
    },
    text: {
        fontSize: 24,
        color: '#664d00',
    },
});

export default DetailScreen;
