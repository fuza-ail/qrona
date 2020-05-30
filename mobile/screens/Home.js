import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import polygonData from '../assets/polygondata/polygonData';
import * as geolib from 'geolib'
import StatusCard from '../components/StatusCard'

export default function Home() {
  const initialState = {
    latitude: -6.21462,
    longitude: 106.8223,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  }
  const [currentPosition, setPosition] = useState(initialState)
  let status = 'uncovered'
  let position
  let colorCode = 'rgba(128, 139, 150, 0.3)'
  let description = 'Zona uncovered ialah area tidak ter-cover aplikasi'

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude } = position.coords
      setPosition({
        ...initialState,
        // latitude,
        // longitude
      })
    })
  }, [])

  polygonData.forEach(el => {
    if (geolib.isPointInPolygon(
      { latitude: currentPosition.latitude, longitude: currentPosition.longitude },
      el.coords)) {
      position = el.name
      if (el.case > 100) {
        status = 'Awas!'
        colorCode = 'rgba(236, 112, 99,0.3)'
        description = 'Zona awas ialah area dimana kasus positif covid diatas 100 orang'
      } else if (el.case > 50) {
        status = 'Siaga!'
        colorCode = 'rgba(245, 176, 65,0.3)'
        description = 'Zona siaga ialah area dimana kasus positif covid diantara 50 hingga 100 orang'
      } else if (el.case > 0) {
        status = 'Waspada!'
        colorCode = 'rgba(247, 220, 111,0.3)'
        description = 'Zona waspada ialah area dimana kasus positif covid diantara 0 hingga 50 orang'
      } else {
        status = 'Aman'
        colorCode = 'rgba(88, 214, 141,0.3)'
        description = 'Zona aman ialah area bebas kasus positif covid-19, namun anda tetap harus waspada dan mengikuti protokol covid-19'
      }
    }
  })

  return (
    <View style={styles.container}>
      <StatusCard status={status} position={position} colorCode={colorCode} description={description}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});