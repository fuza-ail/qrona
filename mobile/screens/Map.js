import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Button,
  View,
  Text,
  ScrollView,
  Alert,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import polygonData from "../assets/polygondata/polygonData";

export default function Map() {
  const initialState = {
    latitude: -6.21462,
    longitude: 106.84513,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [currentPosition, setPosition] = useState(initialState);
  const [mapStatus, setMap] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { longitude, latitude } = position.coords;
        setMap(true);
        setPosition({
          ...initialState,
          latitude,
          longitude,
        });
      },
      (error) => alert(error.message),
      { timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  function hello(cases, name) {
    let status;
    if (cases > 100) {
      status = "Awas!";
    } else if (cases > 50) {
      status = "Siaga!";
    } else if (cases > 0) {
      status = "Waspada!";
    } else {
      status = "Aman";
    }
    Alert.alert(`kecamatan: ${name}\nstatus: ${status}\nkasus: ${cases}`);
  }

  return (
    <>
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ alignItems: "center", width: 375 }}
        >
          <Text style={styles.screenTitle}>Peta Sebaran COVID-19</Text>
          <View style={styles.mapBox}>
            <MapView
              provider={PROVIDER_GOOGLE}
              style={styles.mapView}
              initialRegion={currentPosition}
              showsMyLocationButton
              showsCompass
              showsScale
              showsUserLocation
            >
              {polygonData.map((polygon, idx) => [
                <MapView.Polygon
                  onPress={() => hello(polygon.case, polygon.name)}
                  tappable
                  key={idx}
                  coordinates={polygon.coords}
                  fillColor={
                    polygon.case > 100
                      ? "rgba(255, 166, 157, 0.4)"
                      : polygon.case > 50
                      ? "	rgba(255, 195, 160, 0.4)"
                      : polygon.case > 0
                      ? "rgba(255, 242, 175, 0.4)"
                      : "rgba(101, 220, 184, 0.4)"
                  }
                  strokeColor={
                    polygon.case > 100
                      ? "rgba(255, 0, 0, 0.8)"
                      : polygon.case > 50
                      ? "	rgba(255, 174, 2, 0.8)"
                      : polygon.case > 0
                      ? "rgba(255, 255, 0, 0.8)"
                      : "rgba(0, 255, 0, 0.8)"
                  }
                />,
              ])}
            </MapView>
            <View style={styles.legend}>
              <View style={styles.legend_color_awas}></View>
              <Text style={styles.legend_item}>Awas</Text>
              <View style={styles.legend_color_siaga}></View>
              <Text style={styles.legend_item}>Siaga</Text>
              <View style={styles.legend_color_waspada}></View>
              <Text style={styles.legend_item}>Waspada</Text>
              <View style={styles.legend_color_aman}></View>
              <Text style={styles.legend_item}>Aman</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#65DCB8",
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#097C54",
    marginTop: 60,
  },
  mapBox: {
    backgroundColor: "#B3EFDD",
    alignItems: "center",
    width: 340,
    marginVertical: 20,
    borderRadius: 5,
  },
  mapView: {
    height: 420,
    width: 310,
    borderRadius: 5,
    marginVertical: 15,
  },
  legend: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: 310,
  },
  legend_item: {
    marginRight: 15,
    marginBottom: 15,
    color: "#566573",
  },
  legend_color_awas: {
    marginRight: 5,
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: "#FFA69D",
  },
  legend_color_siaga: {
    marginRight: 5,
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: "#FFC3A0",
  },
  legend_color_waspada: {
    marginRight: 5,
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: "#FFF2AF",
  },
  legend_color_aman: {
    marginRight: 5,
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: "#65DCB8",
  },
});
