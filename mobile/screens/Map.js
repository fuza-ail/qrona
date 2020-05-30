import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import polygonData from '../assets/polygondata/polygonData'

export default function Map() {
  const initialState = {
    latitude: -6.21462,
    longitude: 106.84513,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }
  const [currentPosition, setPosition] = useState(initialState)
  const [mapStatus, setMap] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude } = position.coords
      setMap(true)
      setPosition({
        ...initialState,
        latitude,
        longitude
      })
    },
      error => alert(error.message),
      { timeout: 20000, maximumAge: 1000 }
    )
  }, [])

  function hello(cases, name) {
    let status
    if (cases > 100) {
      status = 'Awas!'
    } else if (cases > 50) {
      status = 'Siaga!'
    } else if (cases > 0) {
      status = 'Waspada!'
    } else {
      status = 'Aman'
    }
    alert(`kecamatan: ${name}\nstatus: ${status}\nkasus: ${cases}`)
  }

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={styles.container}
      initialRegion={currentPosition}
      showsMyLocationButton
      showsCompass
      showsScale
      showsUserLocation>
      {polygonData.map((polygon, idx) => [
        <MapView.Polygon
          onPress={() => hello(polygon.case, polygon.name)}
          tappable
          key={idx}
          coordinates={polygon.coords}
          fillColor={polygon.case > 100 ? 'rgba(255, 0, 0, 0.2)' :
            polygon.case > 50 ? '	rgba(255, 174, 2 ,0.2)' : polygon.case > 0 ? 'rgba(255, 255, 0 ,0.2)' : 'rgba(0,255,0,0.2)'}
          strokeColor={polygon.case > 100 ? 'rgba(255, 0, 0, 0.8)' :
            polygon.case > 50 ? '	rgba(255, 174, 2 ,0.8)' : polygon.case > 0 ? 'rgba(255, 255, 0 ,0.8)' : 'rgba(0,255,0,0.8)'}
        />
      ])}
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    // height: 400,
    // width:600,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});