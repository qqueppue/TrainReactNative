/* eslint-disable prettier/prettier */
import React, {Component, useEffect, useState} from 'react';
import {
    Button,
    Linking,
  StyleSheet,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; //map 지도
import Geolocation from 'react-native-geolocation-service'; //위치 값
import Getlocation from 'react-native-get-location'; //위치 값

import MyMarker from './components/MyMarker';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            initLocation: { //경복궁
                latitude: 37.577897,
                longitude: 126.976879,
                latitudeDelta: 0.02,    //0.1 default 0.05(Zoomin 3배), 0.02(Zoomin 5배)
                longitudeDelta: 0.02,
            },
            pinLocation: {  //부산 IT 센터
                latitude: 35.156021,
                longitude: 129.059480,
            },
        };
    }

    componentDidMount() {
        console.log('init');
        console.log(this.state.initLocation);
    }

    async getCurrentLocation() {
        await Getlocation
            .getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 15000,
            })
            .then(location => {
                console.log('current');
                console.log(location);
                var tmpLocation = {
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.012,
                    longitudeDelta: 0.012,
                };
                this.setState({initLocation: tmpLocation});
            })
            .catch(err => {
                const {code, message} = err;
                console.error(code, message);
            });
    }

    onMyLocationClick = () => {
        //alert("위치 조회");
        this.getCurrentLocation();
    }

    onMarkerClick = () => {
        Linking.openURL('http://www.busanit.ac.kr/m');
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initLocation={this.state.initLocation}
                    region={this.state.initLocation}>
                    <Marker
                        coordinate={this.state.pinLocation}
                        title="부산IT교육센터"
                        description="부산인재개발원 서면 교육원"
                        image={require('./images/loca.png')}
                        onCalloutPress={this.onMarkerClick} />
                    {(this.state.initLocation) ? (
                        <MyMarker location={this.state.initLocation} title="현재위치" />
                    ) : (
                        <View />
                    )}
                </MapView>
                <Button title="현재위치" onPress={this.onMyLocationClick} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    map: {
        flex: 1,
        marginBottom: 10,
    },
});
