import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function CheckIn() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
        <Text style={styles.screenTitle}>Check In</Text>
        <View style={styles.checkin_box}>
          <View style={styles.camera}></View>
          <Text style={styles.info}>Scan Hot Place QR you Visit Here</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_text}>Scan</Text>
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
  checkin_box: {
    backgroundColor: "#B3EFDD",
    alignItems: "center",
    width: 340,
    height: 366,
    borderRadius: 5,
    marginVertical: 25,
  },
  camera: {
    backgroundColor: "#fff",
    width: 310,
    height: 300,
    marginHorizontal: 10,
    marginTop: 15,
    borderRadius: 5,
  },
  info: {
    marginVertical: 15,
    color: "#566573",
  },
  btn: {
    alignItems: "center",
    width: 320,
    padding: 10,
    marginBottom: 45,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: "#00B979",
  },
  btn_text: {
    color: "#B3EFDD",
  },
});
