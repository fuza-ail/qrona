import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Button,
  AsyncStorage,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useSelector } from "react-redux";
import axios from "axios";

export default function CheckIn() {
  const { access_token } = useSelector((state) => state.reducerUser);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [BarcodeId, setBarcodeId] = useState(null);
  // const [access_token, set_access_token] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("access_token", (err, res) => {
      if (res) {
        set_access_token(res);
        alert("dapet" + res);
      }
    });
  }, []);

  const showCamera = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    sendCheckin(data);
  };

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const sendCheckin = (QRdata) => {
    // let newQrData = JSON.parse(QRdata);
    alert(QRdata);
    axios({
      method: "POST",
      url: "https://vast-woodland-47918.herokuapp.com/checkin",
      headers: { access_token },
      data: {
        id: Number(QRdata),
      },
    })
      .then((result) => {
        alert("Check In Success");
      })
      .catch((err) => alert(err));
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
        <Text style={styles.screenTitle}>Check In</Text>
        <View style={styles.checkin_box}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={styles.camera}
          />
          {scanned && (
            <Button
              title={"Tap to Scan Again"}
              onPress={() => setScanned(false)}
            />
          )}
          <Text style={styles.info}>Scan QR Code untuk Check In</Text>
        </View>
      </ScrollView>
      {/* <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_text} onPress={showCamera}>
          Scan
        </Text>
      </TouchableOpacity> */}
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
  checkin_box: {
    backgroundColor: "#B3EFDD",
    alignItems: "center",
    width: 340,
    height: 490,
    borderRadius: 5,
    marginTop: 15,
  },
  camera: {
    flex: 1,
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
