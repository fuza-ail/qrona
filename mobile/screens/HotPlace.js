import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import Place from "../components/Place";
import { useSelector, useDispatch } from "react-redux";
import { getPlaces } from "../store/actions/actionHotPlace";
import axios from "axios";

export default function HotPlace({ navigation }) {
  const dispatch = useDispatch();
  const { access_token } = useSelector((state) => state.reducerUser);
  const { places } = useSelector((state) => state.reducerHotPlace);

  useEffect(() => {
    dispatch(getPlaces(access_token));
  }, []);

  function toQrHotplace(place) {
    axios({
      url: `https://vast-woodland-47918.herokuapp.com/hotplace/${place.id}`,
      method: "GET",
      headers: { access_token },
    })
      .then((res) => {
        navigation.navigate("QR Hotplace", { place: res.data });
      })
      .catch((err) => alert(err));
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
    color: "#097C54",
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
