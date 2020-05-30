import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StatusCard(props) {

  return (
    <View style={styles.container}>
      <View style={{
        backgroundColor: props.colorCode,
        width: 380,
        padding: 10,
        borderRadius: 10,
        borderBottomColor: props.status == 'Siaga!'?
          'orange':props.status == 'Waspada!'?'yellow':props.status == 'Awas!'?'red':props.status == 'Aman'?'green':'grey',
        borderBottomWidth: 3,
      }}>
        <Text style={styles.heading}>Anda berada di zona {props.status}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'center'
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#566573'
  }
});