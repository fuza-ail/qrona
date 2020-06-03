import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	ScrollView,
	TouchableOpacity,
	Button,
	AsyncStorage
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";

export default function CheckIn() {
	const [hasPermission, setHasPermission] = useState(null);
	const [scanned, setScanned] = useState(false);
	const [BarcodeId, setBarcodeId] = useState(null);
	const [access_token, set_access_token] = useState(null);

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

	const sendCheckin = QRdata => {
		// let newQrData = JSON.parse(QRdata);
		// alert(QRdata);
		axios({
			method: "POST",
			url: "https://thawing-plains-96418.herokuapp.com/checkin",
			data: {
				id: 13
			}
		})
			.then(result => {
				alert("success checkin" + JSON.stringify(result.data));
			})
			.catch(err => alert(err));
	};

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
				<Text style={styles.screenTitle}>Check In</Text>
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
					<Text style={styles.info}>Scan Hot Place QR you Visit Here</Text>
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
		backgroundColor: "#65DCB8"
	},
	screenTitle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#00B979",
		marginTop: 60
	},
	checkin_box: {
		backgroundColor: "#B3EFDD",
		alignItems: "center",
		width: 340,
		height: 366,
		borderRadius: 5,
		marginVertical: 25
	},
	camera: {
		backgroundColor: "#fff",
		width: 310,
		height: 300,
		marginHorizontal: 10,
		marginTop: 15,
		borderRadius: 5
	},
	info: {
		marginVertical: 15,
		color: "#566573"
	},
	btn: {
		alignItems: "center",
		width: 320,
		padding: 10,
		marginBottom: 45,
		marginTop: 15,
		borderRadius: 5,
		backgroundColor: "#00B979"
	},
	btn_text: {
		color: "#B3EFDD"
	}
});
