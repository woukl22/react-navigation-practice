import React from 'react';
import { ImageBackground } from "react-native";
import { StatusBar } from 'expo-status-bar';

const Loading = () => {
  return (
      <ImageBackground
          source={require('../assets/Loading.png')}    
          style={{width:"100%",height:"100%"}}>
          <StatusBar hidden/>
      </ImageBackground>
  );
}

export default Loading;