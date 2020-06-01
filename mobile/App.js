import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Map from "./screens/Map";
import Profile from "./screens/Profile";
import HotPlace from "./screens/HotPlace";
import Login from "./screens/Login";
import Register from "./screens/Register";
import AddHotPlace from "./screens/AddHotPlace";
import CheckIn from "./screens/CheckIn";
import QrHotplace from "./screens/QrHotplace";
import Protocol from "./screens/Protocol";

const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <AddHotPlace /> */}
      {/* <CheckIn /> */}
      {/* <QrHotplace /> */}
      {/* <Protocol /> */}
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Hot Place" component={HotPlace} />
          <Tab.Screen name="Map" component={Map} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
