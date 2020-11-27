/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

class SettingScreen extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text children="Setting UI" />
                <View style={styles.buttonLayout}>
                    <Button
                        title= "open drawer"
                        onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
                    />
                    <Button
                        title= "toggle drawer"
                        onPress={() => this.props.navigation.dispatch(DrawerActions.toggleDrawer())}
                    />
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
    },
    buttonLayout: {
        flexDirection: 'row',
    },
});


export default SettingScreen;
