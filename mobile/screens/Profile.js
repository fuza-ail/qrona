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
import { useSelector, useDispatch } from "react-redux";
import { getUser, updateDataUser } from "../store/actions/actionUser";

export default function Profile(props) {
  const { access_token, user } = useSelector((state) => state.reducerUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(access_token));
  }, []);

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
  const [address, setAddress] = useState(user.address);
  const [email, setEmail] = useState(user.email);

  function toUpdate() {
    setIsUpdate(true);
  }

  function cancelUpdate() {
    setIsUpdate(false);
  }

  function updateUser() {
    // DISPATCH TO UPDATE
    if (name === "") {
      alert("Name Must Filled");
    } else if (phone === "") {
      alert("Phone Must Filled");
    } else if (address === "") {
      alert("Address Must Filled");
    } else {
      const updateData = { name, phone, address };
      dispatch(updateDataUser(updateData, access_token));
      // REFETCH
      // dispatch(getUser(access_token));
      setIsUpdate(false);
    }
  }

  if (isUpdate) {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{ alignItems: "center", width: 375 }}
        >
          <Text style={styles.screenTitle}>Update Profile</Text>
          {/* <Text>{JSON.stringify(user)}</Text>
          <Text>{JSON.stringify(no_ktp)}</Text> */}
          <TextInput
            style={styles.input_disable}
            value={no_ktp}
            editable={false}
          />
          <TextInput
            style={styles.input_disable}
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
            onChangeText={(text) => setAddress(text)}
            value={address}
            placeholder="Enter Address"
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
        <Text style={styles.prof_title}>Address</Text>
        <View style={styles.prof_box}>
          <Text style={styles.prof_value}>{user.address}</Text>
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
    color: "#097C54",
    marginTop: 60,
  },
  input: {
    backgroundColor: "#DEDEDE",
    color: "#46B19C",
    width: 320,
    padding: 10,
    borderRadius: 5,
    marginTop: 25,
    paddingHorizontal: 20,
  },
  input_disable: {
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
    color: "#097C54",
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
