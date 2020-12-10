/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const MyButton = (props) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={props.onButtonClick}
        >
            <Text children={props.title} style={styles.title} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6699ff',
        padding: 15,
        marginTop: 6,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 19,
    },
});

export default MyButton;
