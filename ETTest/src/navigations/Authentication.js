import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BeforeLogIn, LogIn, SignUp } from '../Authentication';

const Stack = createNativeStackNavigator();

 const Authentication = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BeforeLogIn">
        <Stack.Screen name="BeforeLogIn" component={BeforeLogIn} options={{headerShown: false}}/>
        <Stack.Screen name="LogIn" component={LogIn} options={{headerShown: false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Authentication;