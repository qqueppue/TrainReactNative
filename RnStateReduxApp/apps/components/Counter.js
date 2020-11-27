/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

const Counter = ({index, value, handleIncrement, handleDecrement}) => {
    return (
        <View style={styles.layout}>
            <Text children={`Count :  ${value.counterNum}`} />
            <View style={styles.buttonLayout}>
                <TouchableOpacity style={styles.opcity} onPress={() => handleIncrement(index)}>
                    <Text children="+" style={styles.button}/>
                </TouchableOpacity>
                <Text children="   " />
                <TouchableOpacity style={styles.opcity} onPress={() => handleDecrement(index)}>
                    <Text children="-" style={styles.button} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

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


Counter.propTypes = {
    index: PropTypes.number,
    value: PropTypes.object,
    handleIncrement: PropTypes.func,
    handleDecrement: PropTypes.func,
};

Counter.defaultProps = {
    index: 0,
    value: {counterNum: 0},
    handleIncrement: () => console.warn('handleIncrement not defined'),
    handleDecrement: () => console.warn('handleDecrement not defined'),
};

export default Counter;
