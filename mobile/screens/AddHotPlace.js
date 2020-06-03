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

import { useSelector, useDispatch } from "react-redux";
import { addDataHotPlace } from "../store/actions/actionHotPlace";

export default function Register({ navigation }) {
	const { access_token } = useSelector(state => state.reducerUser);
	const dispatch = useDispatch();

	const [name, setName] = useState("");
	const [type, setType] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAdress] = useState("");

	function addHotPlace() {
		// DISPATCH TO ADD HOTPLACE
		if (name === "") {
			alert("Name Must Filled");
		} else if (type === "") {
			alert("Type Must Filled");
		} else if (phone === "") {
			alert("Type Must Filled");
		} else if (address === "") {
			alert("Address Must Filled");
		} else {
			let data = {
				name: name,
				type: type,
				address: address,
				phone: phone
			};
			// alert(JSON.stringify(data));
			axios({
				method: "post",
				url: "https://vast-woodland-47918.herokuapp.com/hotplace",
				data: data
			})
				.then(res => {
					alert("Success\n" + JSON.stringify(res.data));
					navigation.navigate("HotPlace");
				})
				.catch(err => {
					alert(err);
				});
			// const dataHotPlace = { name, type, phone, address, barcode_url };
			dispatch(addDataHotPlace(access_token, data));
			navigation.navigate("HotPlace");
		}
	}

	return (
		<KeyboardAvoidingView style={styles.container} behavior="padding">
			<ScrollView contentContainerStyle={{ alignItems: "center", width: 375 }}>
				<Text style={styles.screenTitle}>Add Crowd Point</Text>
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
				<TouchableOpacity
					onPress={() => navigation.goBack()}
					style={styles.btn_off}
				>
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
