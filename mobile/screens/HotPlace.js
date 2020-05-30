import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HotPlace(props) {

  return (
    <View style={styles.container}>
      <Text>hot place</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});