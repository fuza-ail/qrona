import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import StatusUSer from "../components/StatusUser";

export default function Profile(props) {
  const user = {
    name: "Hamzah Abdullah Mubarak",
    no_ktp: "1234567890123456",
    phone: "123456789012",
    adress: "5, 48 Pirrama Rd, Pyrmont NSW 2009, AUS",
    email: "hamzah@mail.com",
    status: "OTG",
  };

  let colorCode;
  let status;
  if (user.status === "positif") {
    colorCode = "#FFA69D";
    status = "Positif";
  } else if (user.status === "OTG") {
    colorCode = "#FFC3A0";
    status = "OTG";
  } else if (user.status === "ODP") {
    colorCode = "#FFF2AF";
    status = "ODP";
  } else {
    colorCode = "#46B19C";
    status = "Negatif";
  }

  const [isUpdate, setIsUpdate] = useState(false);
  const [name, setName] = useState(user.name);
  const [no_ktp, setNo_ktp] = useState(user.no_ktp);
  const [phone, setPhone] = useState(user.phone);
  const [adress, setAdress] = useState(user.adress);
  const [email, setEmail] = useState(user.email);

  function toUpdate() {
    setIsUpdate(true);
  }

  function cancelUpdate() {
    setIsUpdate(false);
  }

  function updateUser() {
    // DISPATCH TO UPDATE
    setIsUpdate(false);
  }

  if (isUpdate) {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ alignItems: "center", width: 375 }}
        >
          <Text style={styles.screenTitle}>Update Profile</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setNo_ktp(text)}
            value={no_ktp}
            editable={false}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setEmail(text)}
            value={email}
            editable={false}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Enter Name"
            placeholderTextColor="#46B19C"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setPhone(text)}
            value={phone}
            keyboardType="numeric"
            minLength={10}
            maxLength={16}
            placeholder="Enter Phone Number"
            placeholderTextColor="#46B19C"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setAdress(text)}
            value={adress}
            placeholder="Enter Adress"
            placeholderTextColor="#46B19C"
            autoCorrect={false}
          />
        </ScrollView>
        <TouchableOpacity onPress={updateUser} style={styles.btn}>
          <Text style={styles.btn_text}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={cancelUpdate} style={styles.btn_off}>
          <Text style={styles.btn_text}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
        <Text style={styles.screenTitle}>{user.name}</Text>
        <View style={styles.status}>
          <StatusUSer status={status} colorCode={colorCode} />
        </View>
        <Text style={styles.prof_title}>KTP Number</Text>
        <View style={styles.prof_box}>
          <Text style={styles.prof_value}>{user.no_ktp}</Text>
        </View>
        <Text style={styles.prof_title}>Email</Text>
        <View style={styles.prof_box}>
          <Text style={styles.prof_value}>{user.email}</Text>
        </View>
        <Text style={styles.prof_title}>Phone</Text>
        <View style={styles.prof_box}>
          <Text style={styles.prof_value}>{user.phone}</Text>
        </View>
        <Text style={styles.prof_title}>Adress</Text>
        <View style={styles.prof_box}>
          <Text style={styles.prof_value}>{user.adress}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={toUpdate} style={styles.btn}>
        <Text style={styles.btn_text}>Edit Profile</Text>
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
  input: {
    backgroundColor: "#B3EFDD",
    color: "#46B19C",
    width: 320,
    padding: 10,
    borderRadius: 5,
    marginTop: 25,
    paddingHorizontal: 20,
  },
  prof_title: {
    fontSize: 16,
    color: "#46B19C",
    marginTop: 15,
    marginBottom: 10,
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
  btn_off: {
    alignItems: "center",
    backgroundColor: "#46B19C",
    width: 320,
    padding: 10,
    marginBottom: 25,
    borderRadius: 5,
  },
  btn_text: {
    color: "#B3EFDD",
  },
});
