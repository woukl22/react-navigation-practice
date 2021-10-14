import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const LogIn = ({navigation}) => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Screen</Text>
      <Button title="Signup" onPress={() => navigation.navigate('SignUp')}></Button>
    </View>
  );
}

export default LogIn;