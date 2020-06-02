import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Place from "../components/Place";

export default function HotPlace({ navigation }) {
  const places = [
    {
      id: 1,
      name: "Mini Market Asyik",
      adress: "5, 48 Pirrama Rd, Pyrmont NSW 2009, Australia",
      // linkQR: "abcdef",
      // imgUrl: "abcdef",
    },
    {
      id: 2,
      name: "Warung Makan Sihuy",
      adress: "5, 48 Pirrama Rd, Pyrmont NSW 2009, Australia",
      // imgUrl: "abcdef",
      // linkQR: "abcdef",
    },
  ];

  function toQrHotplace(place) {
    navigation.navigate("QR Hotplace", { place });
  }

  function toAddPlace() {
    navigation.navigate("Add Hotplace");
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
        <Text style={styles.screenTitle}>My Crowd Point</Text>
        <Place toQrHotplace={(place) => toQrHotplace(place)} places={places} />
      </ScrollView>
      <TouchableOpacity onPress={toAddPlace} style={styles.btn}>
        <Text style={styles.btn_text}>Add Crowd Point</Text>
      </TouchableOpacity>
    </View>
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
    color: "#00B979",
    marginTop: 60,
  },
  btn: {
    alignItems: "center",
    width: 320,
    padding: 10,
    marginBottom: 25,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: "#00B979",
  },
  btn_text: {
    color: "#B3EFDD",
  },
});
