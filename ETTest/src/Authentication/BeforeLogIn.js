import React from "react";
import { Text, TouchableOpacity, View, ImageBackground, StyleSheet } from "react-native";
import Swiper from "react-native-web-swiper";
import LogIn from './LogIn';

const BeforeLogIn = ({navigation}) => {
  return (
    <View style={{flex:1}}>
      <View style={{flex:9}}>
          <Swiper 
            horizontal
            loop='true'
            controlsProps={{
              dotsTouchable: true,
              nextTitle: '',
              prevTitle: '',
            }}
          >
            <View>
              <ImageBackground source={require('../../assets/beforeLogIn_1.png')} style={{width:'100%', height: '100%'}}/>
            </View>
            <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(20,200,20,0.3)"}}/>
            <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(200,20,20,0.3)"}}/>
          </Swiper>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('LogIn')} >
          <Text style={styles.title}>로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#43cd76',
    width: '100%',
    height: '100%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    color: 'white'
  }
});

export default BeforeLogIn;