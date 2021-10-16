import React, { useState } from 'react';
import { Alert, TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SignUp } from './SignUp';

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{flex:1}}
      extraScrollHeight={20}
    >
      <View style={{flex: 1}}>
        <View style={styles.container}>
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.textInput}
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={() => {}}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
            }}
            placeholder="sample@email.com"
            returnKeyType="next"
            textContentType="none" // ios only
            underlineColorAndroid="transparent" // Android only
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.textInput}
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={() => {}}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
            }}
            placeholder="Password"
            returnKeyType="done"
            secureTextEntry={true}
            textContentType="none" // ios only
            underlineColorAndroid="transparent" // Android only
          />
          <TouchableOpacity style={styles.button} onPress={()=> Alert.alert('로그인!')} >
            <Text style={{justifyContent: 'center', color: 'white'}}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('SignUp')} >
            <Text style={{justifyContent: 'center', color: 'white'}}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

LogIn.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool,
  returnKeyType: PropTypes.oneOf(['done', 'next']),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  text: {
    fontSize: 14,
    marginTop: 20,
    marginLeft: 20,
    color: '#a6a6a6',
  },
  textInput: {
    placeholderTextColor: '#a6a6a6',
    color: '#000000',
    height: 40,
    margin: 5,
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#43cd76',
    height: 40,
    marginTop: 20,
    marginHorizontal: 20,
    padding: 10,
  }
});

export default LogIn;
