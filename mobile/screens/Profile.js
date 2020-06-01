import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Profile(props) {
  const user = {
    name: "Hamzah Abdullah Mubarak",
    no_ktp: "1234567890123456",
    phone: "123456789012",
    adress: "5, 48 Pirrama Rd, Pyrmont NSW 2009, AUS",
    email: "hamzah@mail.com",
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
        <Text style={styles.screenTitle}>Profile</Text>
        <Text style={styles.prof_title}>Name</Text>
        <View style={styles.prof_box}>
          <Text style={styles.prof_value}>{user.name}</Text>
        </View>
        <Text style={styles.prof_title}>KTP Number</Text>
        <View style={styles.prof_box}>
          <Text style={styles.prof_value}>{user.no_ktp}</Text>
        </View>
        <Text style={styles.prof_title}>Phone Number</Text>
        <View style={styles.prof_box}>
          <Text style={styles.prof_value}>{user.phone}</Text>
        </View>
        <Text style={styles.prof_title}>Adress</Text>
        <View style={styles.prof_box}>
          <Text style={styles.prof_value}>{user.adress}</Text>
        </View>
        <Text style={styles.prof_title}>Email</Text>
        <View style={styles.prof_box}>
          <Text style={styles.prof_value}>{user.email}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_text}>Update Data</Text>
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
  prof_title: {
    fontSize: 16,
    color: "#46B19C",
    marginVertical: 10,
  },
  prof_box: {
    width: 320,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#B3EFDD",
  },
  prof_value: {
    color: "#46B19C",
    marginVertical: 3,
    marginHorizontal: 8,
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
