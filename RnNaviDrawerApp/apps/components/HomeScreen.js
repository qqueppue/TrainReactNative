/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text children="Home UI" />
                <View style={styles.buttonLayout}>
                    <View style={styles.button}>
                        <Button
                            title= "open drawer"
                            onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title= "toggle drawer"
                            onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffd699',
    },
    buttonLayout: {
        flexDirection: 'row',
    },
    button: {
        margin: 10,
    },
});

export default HomeScreen;
