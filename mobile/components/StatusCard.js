import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function StatusCard(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: props.colorCode,
          width: 320,
          marginTop: 60,
          borderRadius: 5,
          borderBottomColor:
            props.status == "Siaga!"
              ? "orange"
              : props.status == "Waspada!"
              ? "yellow"
              : props.status == "Awas!"
              ? "red"
              : props.status == "Aman"
              ? "green"
              : "#00B979",
          borderBottomWidth: 3,
        }}
      >
        <Text style={styles.heading}>Anda berada di zona {props.status}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    alignItems: "center",
    backgroundColor: "#65DCB8",
  },
  heading: {
    fontSize: 16,
    marginVertical: 20,
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
