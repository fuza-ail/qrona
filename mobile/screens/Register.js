import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

export default function Register() {
  const [name, setName] = useState("");
  const [no_ktp, setNo_ktp] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function register() {}

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
        <Text style={styles.screenTitle}>Registration Form</Text>
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
          onChangeText={(text) => setNo_ktp(text)}
          value={no_ktp}
          keyboardType="numeric"
          minLength={16}
          maxLength={16}
          placeholder="Enter KTP Number"
          placeholderTextColor="#46B19C"
          autoCapitalize="none"
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
          value={address}
          placeholder="Enter Adress"
          placeholderTextColor="#46B19C"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Enter Email"
          placeholderTextColor="#46B19C"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Enter Password"
          placeholderTextColor="#46B19C"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={register} style={styles.btn}>
          <Text style={styles.btn_text}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_off}>
          <Text style={styles.btn_text}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
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
  btn: {
    alignItems: "center",
    width: 320,
    padding: 10,
    marginTop: 65,
    borderRadius: 5,
    backgroundColor: "#00B979",
  },
  btn_off: {
    alignItems: "center",
    backgroundColor: "#46B19C",
    width: 320,
    padding: 10,
    marginTop: 25,
    marginBottom: 48,
    borderRadius: 5,
  },
  btn_text: {
    color: "#B3EFDD",
  },
});
