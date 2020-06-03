import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  Button,
} from "react-native";
import { useSelector } from "react-redux";
import { BarCodeScanner } from "expo-barcode-scanner";
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
    sendCheckout(data);
  };

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const sendCheckout = (QRdata) => {
    axios({
      method: "PUT",
      headers: { access_token },
      url: `https://vast-woodland-47918.herokuapp.com/checkout/${QRdata}`,
    })
      .then((result) => {
        alert("success checkout" + JSON.stringify(result.data));
      })
      .catch((err) => alert(err));
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
        <Text style={styles.screenTitle}>Check Out</Text>
        <View style={styles.checkin_box}>
          <View style={styles.camera}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />

            {scanned && (
              <Button
                title={"Tap to Scan Again"}
                onPress={() => setScanned(false)}
              />
            )}
          </View>
          <Text style={styles.info}>Scan Hot Place QR before you leave</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_text} onPress={showCamera}>
          Scan
        </Text>
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
  checkin_box: {
    backgroundColor: "#B3EFDD",
    alignItems: "center",
    width: 340,
    height: 366,
    borderRadius: 5,
    marginVertical: 25,
  },
  camera: {
    backgroundColor: "#fff",
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
