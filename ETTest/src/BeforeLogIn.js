import React from "react";
import { Text, TouchableOpacity, View, ImageBackground, Button } from "react-native";
import Swiper from "react-native-web-swiper";

export default function beforeLogIn() {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1}}>
          <Swiper 
            horizontal
            controlsProps={{
              dotsTouchable: true,
              nextTitle: '',
              prevTitle: ''
            }}
          >
              <View>
                  <ImageBackground source={require('../assets/beforeLogIn_1.png')} style={{width:'100%', height: '100%'}}>
                    <View style={{flex:3, alignItems: 'center', justifyContent: 'flex-end'}}>
                      <Button title="로그인"  />
                    </View>
                    <View style={{flex: 1}} />
                  </ImageBackground>
              </View>
              <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(20,200,20,0.3)"}}/>
              <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(200,20,20,0.3)"}}/>
          </Swiper>
      </View>
    </View>
  )
}