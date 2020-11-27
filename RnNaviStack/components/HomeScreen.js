/* eslint-disable prettier/prettier */
import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function HomeScreen({navigation}) {
    return (
        <View style={styles.layoutStyle}>
            <View style={styles.buttonStyle}>
                <Button
                title="상세화면"
                onPress={() => navigation.navigate('DETAIL')}
                />
                <Button
                title="설정화면"
                onPress={() => navigation.navigate('SETTING')}
                />
            </View>
                <View style={styles.mainStyle}>
                <Text children="UI Layout" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    layoutStyle: {
        flex: 1,
        flexDirection: 'column',
    },
    buttonStyle: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'flex-start',
    },
    mainStyle: {
        backgroundColor: '#e6f0ff',
        flex: 1,
    },
});

export default HomeScreen;
