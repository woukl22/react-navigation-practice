import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import Swiper from "react-native-web-swiper";

export default class HomeScreen extends React.Component {
    render() {
        return (
          <View style={{flex:1}}>

              <View style={{flex:1}}>
                  <Swiper horizontal>
                      <View>
                          <Image source={require('./1.png')} style={{width:'100%'}} />
                          <Text>Slide 1</Text>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(20,200,20,0.3)"}}>
                          <Text>Slide 2</Text>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"center",backgroundColor:"rgba(200,20,20,0.3)"}}>
                          <Text>Slide 3</Text>
                      </View>
                  </Swiper>
              </View>
          </View>
        )
    }
}