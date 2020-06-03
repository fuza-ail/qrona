import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity,
	AsyncStorage
} from "react-native";
import Place from "../components/Place";
import axios from "axios";

export default function HotPlace({ navigation }) {
	const [places, setPlaces] = useState([]);
	const [access_token, set_access_token] = useState(null);

	useEffect(() => {
		AsyncStorage.getItem("access_token", (err, res) => {
			if (res) {
				set_access_token(res);
				alert("dapet" + res);
			}
		});
		axios({
			method: "get",
			url: "https://thawing-plains-96418.herokuapp.com/hotplace",
			headers: { access_token: access_token }
		})
			.then(res => {
				alert(res.data);
				console.log(res.data);
				setPlaces(res.data);
			})
			.catch(err => {
				alert(err);
			});
	}, []);
	function toAddPlace() {
		navigation.navigate("Add Hotplace");
	}

	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
				<Text style={styles.screenTitle}>My Hot Place</Text>
				<Place places={places} navigation={navigation} />
			</ScrollView>
			<TouchableOpacity onPress={toAddPlace} style={styles.btn}>
				<Text style={styles.btn_text}>Add Hot Place</Text>
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
	btn: {
		alignItems: "center",
		width: 320,
		padding: 10,
		marginBottom: 25,
		marginTop: 15,
		borderRadius: 5,
		backgroundColor: "#00B979"
	},
	btn_text: {
		color: "#B3EFDD"
	}
});
