import React, {useEffect, useState} from 'react';
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; //map 지도
import Geolocation from 'react-native-geolocation-service'; //위치 값

async function requestPermission() {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    } else if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  } catch (error) {
    console.error(`error message : ${error}`);
  }
}

export default function App() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    // 초기값 = 경복궁 위치값
    var initVal = {
      latitude: 37.577897,
      longitude: 126.976879,
    };

    setLocation(initVal);

    requestPermission()
      .then((result) => {
        console.log(result);
        if (result === '') {
          Geolocation.getCurrentPosition(
            (pos) => {
              setLocation(pos.coords);
            },
            (error) => {
              console.error(`Position error : ${error}`);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 5000},
          );
          console.log(`latitude : ${location.latitude}`);
          console.log(`longitude : ${location.longitude}`);
        }
      })
      .catch((err) => {
        console.error(`useEffect error: ${err}`);
      });
    // console.log(`After getCurrentPosition : ${location.latitude}`);
  }, []);

  if (!location) {
    return (
      <View>
        <Text children="GPS disable" />
      </View>
    );
  } else {
    return (
      <View style={styles.view}>
        <MapView
          style={styles.mapView}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="경복궁"
            description="조선왕조 왕의 거처"
            image={require('./images/loca.png')}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    // backgroundColor: 'black',
  },
  mapView: {
    flex: 1,
    margin: 10,
  },
});
