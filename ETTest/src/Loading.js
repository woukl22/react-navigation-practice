import React from 'react';
import { ImageBackground } from "react-native";

const Loading = () => {
  return (
      <ImageBackground
          source={require('../assets/Loading.png')}    
          style={{width:"100%",height:"100%"}}>
      </ImageBackground>
  );
}

export default Loading;