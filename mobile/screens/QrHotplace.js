import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { QRCode } from "react-native-custom-qr-codes";

export default function QrHotplace({ route }) {
  const { place } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
        <Text style={styles.screenTitle}>{place.name}</Text>
        <View style={styles.qr_box}>
          <View style={styles.qr_code}>
            {/* <Image
              style={{ width: 300, height: 300 }}
              source={{
                uri: place.barcode_url,
              }}
            /> */}

            <QRCode
              size={300}
              color={"#000"}
              content={place.id + ""}
              codeStyle="square"
              logo={require("../assets/qricon.png")}
              logoSize={50}
            />
          </View>
          <Text style={styles.info}>
            Print and Put this QR on visible place
          </Text>
        </View>
      </ScrollView>
      {/* <TouchableOpacity style={styles.btn}>
        <Text style={styles.btn_text}>Download QR Code</Text>
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
  qr_box: {
    backgroundColor: "#B3EFDD",
    alignItems: "center",
    width: 340,
    height: 366,
    borderRadius: 5,
    marginVertical: 25,
  },
  qr_code: {
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
