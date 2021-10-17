import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './Style';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
      <StatusBar style="auto" />
    </View>
  );
}