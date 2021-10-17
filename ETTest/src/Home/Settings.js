import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Style';

export const Settings = () => {
  return (
    <View style={styles.container}>
      <Text>Settings!</Text>
      <StatusBar style="auto" />
    </View>
  );
}