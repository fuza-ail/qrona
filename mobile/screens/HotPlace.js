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
  // const places = [
  //   {
  //     id: 1,
  //     name: "Mini Market Asyik",
  //     adress: "5, 48 Pirrama Rd, Pyrmont NSW 2009, Australia",
  //     // linkQR: "abcdef",
  //     // imgUrl: "abcdef",
  //   },
  //   {
  //     id: 2,
  //     name: "Warung Makan Sihuy",
  //     adress: "5, 48 Pirrama Rd, Pyrmont NSW 2009, Australia",
  //     // imgUrl: "abcdef",
  //     // linkQR: "abcdef",
  //   },
  // ];

  function toQrHotplace(place) {
    axios({
      url: `http://192.168.0.103:3000/hotplace/${place.id}`,
      method: "GET",
      headers: { access_token },
    })
      .then((res) => {
        navigation.navigate("QR Hotplace", { place: res.data });
      })
      .catch((err) => alert(err));
  }

  // useEffect(() => {
  //   AsyncStorage.getItem("access_token", (err, res) => {
  //     if (res) {
  //       set_access_token(res);
  //       alert("dapet" + res);
  //     }
  //   });
  //   axios({
  //     method: "get",
  //     url: "http/hotplace",
  //     headers: { access_token: access_token },
  //   })
  //     .then((res) => {
  //       // alert(res.data);
  //       // console.log(res.data);
  //       // setPlaces(res.data);
  //       dispatch({ type: "GET_PLACES", payload: res.data });
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // }, []);
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
