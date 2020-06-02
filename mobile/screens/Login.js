import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/actionUser";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function loginUser() {
    // DISPATCH TO LOGIN
    if (email === "") {
      alert("Email Must Filled");
    } else if (password === "") {
      alert("Password Must Filled");
    } else {
      const loginData = { email, password };
      dispatch(login(loginData));
      navigation.navigate("TabScreen");
    }
  }

  function toRegister() {
    navigation.navigate("Register");
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
        <Image source={require("../assets/QRona.png")} style={styles.logo} />
        <Text style={styles.brand}>QRona</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="#46B19C"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.input}
          secureTextEntry={true}
          placeholder="Enter Password"
          placeholderTextColor="#46B19C"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={loginUser} style={styles.btn}>
          <Text style={styles.btn_text}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.info}>Dont have any Account?</Text>
        <TouchableOpacity onPress={toRegister} style={styles.btn_off}>
          <Text style={styles.btn_text}>Register</Text>
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
  logo: {
    height: 185,
    width: 185,
    marginTop: 65,
  },
  brand: {
    fontSize: 36,
    fontWeight: "700",
    color: "#EB5569",
    marginVertical: 10,
    marginBottom: 30,
  },
  prof_title: {
    fontSize: 16,
    color: "#46B19C",
  },
  input: {
    backgroundColor: "#B3EFDD",
    color: "#46B19C",
    width: 320,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  btn: {
    alignItems: "center",
    width: 320,
    padding: 10,
    marginTop: 15,
    borderRadius: 5,
    backgroundColor: "#00B979",
  },
  btn_off: {
    alignItems: "center",
    backgroundColor: "#46B19C",
    width: 320,
    padding: 10,
    marginTop: 15,
    borderRadius: 5,
  },
  btn_text: {
    color: "#B3EFDD",
  },
  info: {
    fontSize: 14,
    color: "#46B19C",
    marginTop: 10,
    marginLeft: 28,
    alignSelf: "flex-start",
  },
});
