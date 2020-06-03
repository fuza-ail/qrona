import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StatusUser(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.stat_title}>Status</Text>
      <View
        style={{
          backgroundColor: props.colorCode,
          width: 100,
          alignItems: "center",
          borderRadius: 5,
          borderBottomColor:
            props.status == "OTG"
              ? "orange"
              : props.status == "ODP"
              ? "yellow"
              : props.status == "Positif"
              ? "red"
              : "green",
          borderBottomWidth: 3,
        }}
      >
        <Text style={styles.status}>{props.status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 15,
  },
  stat_title: {
    fontSize: 16,
    color: "#46B19C",
    marginBottom: 10,
  },
  status: {
    marginVertical: 10,
    textAlign: "center",
    color: "#566573",
    fontWeight: "bold",
  },
  description: {
    marginBottom: 20,
    marginHorizontal: 24,
    textAlign: "center",
    color: "#566573",
  },
});
