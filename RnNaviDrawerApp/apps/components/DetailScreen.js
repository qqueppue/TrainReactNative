/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { DrawerActions } from 'react-navigation-drawer';

class DetailScreen extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <Text children="Detail UI" />
                <View style={styles.inLayout}>
                    <Text children="현지의 버킷리스트✨" style={styles.mainText} />
                    <Text children="📌일본어로 오늘의 날씨" />
                    <Text children="📌나루토 노래부르기" />
                    <Text children="📌도라에몽 성대모사" />
                    <Text children="📌정형돈 댄스" />
                </View>
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
        backgroundColor: '#ffb84d',
    },
    inLayout: {
        backgroundColor: '#ffd699',
        borderRadius: 2,
        padding: 20,
    },
    buttonLayout: {
        flexDirection: 'row',
    },
    mainText: {
        fontWeight: 'bold',
        fontSize: 20,
    },
});


export default DetailScreen;
