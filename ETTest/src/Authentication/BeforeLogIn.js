import React from "react";
import { Text, TouchableOpacity, View, ImageBackground, StyleSheet } from "react-native";
import Swiper from "react-native-web-swiper";
import LogIn from './LogIn';
import Main from '../navigations/Main';

const BeforeLogIn = ({navigation}) => {
  return (
    <View style={styles.container}>
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
            <View style={styles.screen}>
              <ImageBackground source={require('../../assets/Logo.png')} style={{width:'100%', height: '100%'}}/>
            </View>
            <View style={styles.screen}>
              <ImageBackground source={require('../../assets/bflogin_2.png')} style={{width:'100%', height: '100%'}}/>
            </View>
            <View style={styles.screen}>
              <ImageBackground source={require('../../assets/bflogin_3.png')} style={{width:'100%', height: '100%'}}/>
            </View>
          </Swiper>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('LogIn')} >
          <Text style={styles.title}>로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    backgroundColor: 'white'
  },
  screen: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    flex: 1, 
    flexDirection: 'row'
  },
  button: {
    flex: 1,
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