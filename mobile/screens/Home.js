import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import polygonData from "../assets/polygondata/polygonData";
import * as geolib from "geolib";
import StatusCard from "../components/StatusCard";

export default function Home({ navigation }) {
  const initialState = {
    latitude: -6.21462,
    longitude: 106.8223,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [currentPosition, setPosition] = useState(initialState);
  let status = "uncovered";
  let position;
  let colorCode = "rgba(128, 139, 150, 0.3)";
  let description = "Zona uncovered ialah area tidak ter-cover aplikasi";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      setPosition({
        ...initialState,
        latitude,
        longitude,
      });
    });
  }, []);

  polygonData.forEach((el) => {
    if (
      geolib.isPointInPolygon(
        {
          latitude: currentPosition.latitude,
          longitude: currentPosition.longitude,
        },
        el.coords
      )
    ) {
      position = el.name;
      if (el.case > 100) {
        status = "Awas!";
        colorCode = "#FFA69D";
        description =
          "Zona awas ialah area dimana kasus positif covid diatas 100 orang";
      } else if (el.case > 50) {
        status = "Siaga!";
        colorCode = "#FFC3A0";
        description =
          "Zona siaga ialah area dimana kasus positif covid diantara 50 hingga 100 orang";
      } else if (el.case > 0) {
        status = "Waspada!";
        colorCode = "#FFF2AF";
        description =
          "Zona waspada ialah area dimana kasus positif covid diantara 0 hingga 50 orang";
      } else {
        status = "Aman";
        colorCode = "#65DCB8";
        description =
          "Zona aman ialah area bebas kasus positif covid-19, namun anda tetap harus waspada dan mengikuti protokol covid-19";
      }
    }
  });

  function toCheckIn() {
    navigation.navigate("Check In");
  }

  function toCheckOut() {
    navigation.navigate("Check Out");
  }

  function toAddHotplace() {
    navigation.navigate("Add Hotplace");
  }

  function toProtocol() {
    navigation.navigate("Protocol");
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
        <StatusCard
          status={status}
          position={position}
          colorCode={colorCode}
          description={description}
        />
        <TouchableOpacity onPress={toCheckIn} style={styles.menu_box}>
          <View style={styles.info}>
            <Text style={styles.box_title}>Check In</Text>
            <Text style={styles.box_desc}>
              Lakukan Check in setiap kali anda memasuki Crowd Point
            </Text>
          </View>
          <Image
            source={require("../assets/face-scan.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toCheckOut} style={styles.menu_box}>
          <View style={styles.info}>
            <Text style={styles.box_title}>Check Out</Text>
            <Text style={styles.box_desc}>
              Lakukan Check Out setiap kali anda keluar dari Crowd Point
            </Text>
          </View>
          <Image source={require("../assets/login.png")} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity onPress={toAddHotplace} style={styles.menu_box}>
          <View style={styles.info}>
            <Text style={styles.box_title}>Registrasi Business</Text>
            <Text style={styles.box_desc}>
              Daftarkan Bisnismu sebagai Crowd Point
            </Text>
          </View>
          <Image
            source={require("../assets/pharmacy.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toProtocol} style={styles.menu_box}>
          <View style={styles.info}>
            <Text style={styles.box_title}>Protokol COVID-19</Text>
            <Text style={styles.box_desc}>Baca Informasi terkait Covid-19</Text>
          </View>
          <Image source={require("../assets/shield.png")} style={styles.logo} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#65DCB8",
  },
  menu_box: {
    backgroundColor: "#B3EFDD",
    display: "flex",
    flexDirection: "row",
    width: 320,
    borderRadius: 5,
    marginTop: 25,
  },
  info: {
    width: 240,
  },
  box_title: {
    marginTop: 13,
    marginHorizontal: 24,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#566573",
  },
  box_desc: {
    marginHorizontal: 24,
    marginBottom: 13,
    color: "#566573",
  },
  logo: {
    height: 55,
    width: 55,
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
});
