import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});