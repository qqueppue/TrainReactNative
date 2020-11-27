/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

class CustomDrawer extends Component {
    constructor(props) {
        super(props);

        this.items = [
            {
                navOptionIcon: 'home',      // icon 이름
                navOptionName: 'HOME',      // 메뉴표시 이름
                screenName: 'Home',   // 스크린 이름
            },
            {
                navOptionIcon: 'apps',
                navOptionName: 'Detail',
                screenName: 'Detail',
            },
            {
                navOptionIcon: 'settings',
                navOptionName: 'Setting',
                screenName: 'Setting',
            },
        ];
    }

    render() {
        return (
            <View style={styles.drawer}>
                <View style={styles.image}>
                    <Image source={require('./images/image3.png')} style={styles.profile} />
                </View>
                <View>
                    {this.items.map((item, key) =>
                        <View key={key} style={styles.menuGroup}>
                            {/* <Text children={item.screenName} /> */}
                            <TouchableOpacity onPress={() => this.props.navigation.navigate(item.screenName)}>
                                <View style={styles.touch}>
                                    <Icon style={styles.menuIcon} name={item.navOptionIcon} size={25} />
                                    <Text children={item.navOptionName} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: '#ffa64d',
        alignItems: 'stretch',
        flex: 1,
    },
    profile: {
        width: 100,
        height: 100,
        // resizeMode:'cover',
        resizeMode:'repeat',
        justifyContent: 'center',
    },
    image: {
        alignItems: 'center',
    },
    touch: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuGroup: {
        // margin: 10,
        paddingTop: 20,
        paddingLeft: 20,
    },
    menuIcon: {
        paddingRight: 5,
    },
});

export default CustomDrawer;
