/* eslint-disable prettier/prettier */
import { observer } from 'mobx-react';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

@observer
class Counter extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text children={`Count :  ${0}`} />
            <View style={styles.buttonLayout}>
                <TouchableOpacity
                    style={styles.opcity}
                    // onPress={() => handleIncrement(index)}
                >
                    <Text children="+" style={styles.button} />
                </TouchableOpacity>
                <Text children="   " />
                <TouchableOpacity
                    style={styles.opcity}
                    // onPress={() => handleDecrement(index)}
                >
                    <Text children="-" style={styles.button} />
                </TouchableOpacity>
            </View>
        </View>
        );
    }
}


const styles = StyleSheet.create({
    layout: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLayout: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    opcity: {
        backgroundColor: '#d1b2ff',
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    button: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
});

export default Counter;
