import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
	KeyboardAvoidingView
} from "react-native";
import axios from "axios";

export default function Register({ navigation }) {
	const [name, setName] = useState("");
	const [type, setType] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAdress] = useState("");

	function addHotPlace() {
		// DISPATCH TO ADD HOTPLACE
		let text = `{\n\tname: ${name}, \n\taddress: ${address}, \n\ttype: ${type}, \n\tphone: ${phone} \n}`;
		let encoded = encodeURI(text);
		let barcode_url = `http://api.qrserver.com/v1/create-qr-code/?data=${encoded}&size=500x500`;

		let data = {
			name: name,
			type: type,
			address: address,
			phone: phone,
			barcode_url: barcode_url
		};
		// alert(JSON.stringify(data));
		axios({
			method: "post",
			url: "https://thawing-plains-96418.herokuapp.com/hotplace",
			data: data
		})
			.then(res => {
				alert("Success\n" + JSON.stringify(res.data));
				navigation.navigate("HotPlace");
			})
			.catch(err => {
				alert(err);
			});
	}

	return (
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
				<Text style={styles.screenTitle}>Add Hot Place</Text>
				<TextInput
					style={styles.input}
					onChangeText={text => setName(text)}
					value={name}
					placeholder="Enter Hot Place Name"
					placeholderTextColor="#46B19C"
					autoCorrect={false}
				/>
				<TextInput
					style={styles.input}
					onChangeText={text => setType(text)}
					value={type}
					placeholder="Enter Business Type"
					placeholderTextColor="#46B19C"
					autoCorrect={false}
				/>
				<TextInput
					style={styles.input}
					onChangeText={text => setPhone(text)}
					value={phone}
					keyboardType="numeric"
					minLength={10}
					maxLength={16}
					placeholder="Enter Hot Place Phone Number"
					placeholderTextColor="#46B19C"
					autoCapitalize="none"
					autoCorrect={false}
				/>
				<TextInput
					style={styles.input}
					onChangeText={text => setAdress(text)}
					value={address}
					placeholder="Enter Hot Place Adress"
					placeholderTextColor="#46B19C"
					autoCorrect={false}
				/>
				<TouchableOpacity onPress={addHotPlace} style={styles.btn}>
					<Text style={styles.btn_text}>Add</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => addHotPlace} style={styles.btn_off}>
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
		backgroundColor: "#65DCB8"
	},
	screenTitle: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#00B979",
		marginTop: 60
	},
	input: {
		backgroundColor: "#B3EFDD",
		color: "#46B19C",
		width: 320,
		padding: 10,
		borderRadius: 5,
		marginTop: 25,
		paddingHorizontal: 20
	},
	btn: {
		alignItems: "center",
		width: 320,
		padding: 10,
		marginTop: 140,
		borderRadius: 5,
		backgroundColor: "#00B979"
	},
	btn_off: {
		alignItems: "center",
		backgroundColor: "#46B19C",
		width: 320,
		padding: 10,
		marginTop: 25,
		borderRadius: 5
	},
	btn_text: {
		color: "#B3EFDD"
	}
});
