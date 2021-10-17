import React, {useState} from 'react';
import { Text, View, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PropTypes from 'prop-types';

import { Home, Settings } from '../Home';
import { BeforeLogIn, LogIn, SignUp } from '../Authentication';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeComponent = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="Settings" component={Settings} options={{headerShown: false}}/>
    </Tab.Navigator>
  )
}

const Main = ({state}) => {
  return (
    state ?
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeComponent">
        <Stack.Screen name="HomeComponent" component={HomeComponent} options={{headerShown: false}}/>
        <Stack.Group>
          <Stack.Screen name="BeforeLogIn" component={BeforeLogIn} options={{headerShown: false}}/>
          <Stack.Screen name="LogIn" component={LogIn} options={{headerShown: false}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
    :
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BeforeLogIn">
        <Stack.Group>
          <Stack.Screen name="BeforeLogIn" component={BeforeLogIn} options={{headerShown: false}}/>
          <Stack.Screen name="LogIn" component={LogIn} options={{headerShown: false}}/>
          <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
        </Stack.Group>
        <Stack.Screen name="HomeComponent" component={HomeComponent} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

Main.PropTypes = {
  state: PropTypes.bool.isRequired
}

export default Main;