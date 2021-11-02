import React, { useEffect, useRef, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signup } from '../utils/firebase';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  
  useEffect(() => {
    let _errorMessage = '';
    if (!name) {
      _errorMessage = 'Please enter your name.';
    } else if (password.length < 6){
      _errorMessage = 'The password must contain 6 characters at least.';
    } else if (password !== passwordConfirm) {
      _errorMessage = 'Passwords need to match.';
    } else {
      _errorMessage = '';
    }
    setErrorMessage(_errorMessage);
  }, [name, email, password, passwordConfirm]);

  useEffect(() => {
    setDisabled(
      !(name && email && password && passwordConfirm && !errorMessage)
    );
  }, [name, email, password, passwordConfirm, errorMessage]);

  const _handleSignupButtonPress = async () => {
    try {
      const user = await signup({ email, password, name });
      console.log(user);
      Alert.alert('Signup Success', user.email);
      navigation.goBack();
    } catch (e) {
      Alert.alert('Signup Error', e.message);
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flex: 1, backgroundColor: 'white'}} extraScrollHeight={20}>
      <View style={styles.container}>
        <Text style={styles.text}>Name</Text>
          <TextInput
            style={styles.textInput}
            label="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            onSubmitEditing={() => {
              setName(name.trim());
              emailRef.current.focus();
            }}
            onBlur={() => setName(name.trim())}
            placeholder="Name"
            returnKeyType="next"
          />
          <Text style={styles.text}>Email</Text>
          <TextInput
            style={styles.textInput}
            ref={emailRef}
            label="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            onSubmitEditing={() => passwordRef.current.focus()}
            placeholder="Email"
            returnKeyType="next"
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.textInput}
            ref={passwordRef}
            label="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={() => passwordRef.current.focus()}
            placeholder="Password"
            returnKeyType="done"
            secureTextEntry={true}
          />
          <Text style={styles.text}>Password Confirm</Text>
          <TextInput
            style={styles.textInput}
            ref={passwordConfirmRef}
            label="Password Confirm"
            value={passwordConfirm}
            onChangeText={(text) => setPasswordConfirm(text)}
            onSubmitEditing={_handleSignupButtonPress}
            placeholder="Password"
            returnKeyType="done"
            secureTextEntry={true}
          />
          <Text
            style={styles.errorText} >{errorMessage}</Text>
          <TouchableOpacity
            style={styles.signupButton}
            title="Signup"
            onPress={_handleSignupButtonPress}
            disabled={disabled}
          >
            <Text style={{justifyContent: 'center', color: 'white'}}>Signup</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1, 
    justifyContent: 'center',
    flexDirection: 'column',
    width: '100%'
  },
  text: {
    fontSize: 14,
    marginTop: 10,
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
  signupButton: {
    alignItems: 'center',
    backgroundColor: '#43cd76',
    height: 40,
    marginTop: 10,
    marginHorizontal: 20,
    padding: 10,
  },
  errorText: {
    alignItems: 'center',
    width: '100%',
    height: 20,
    marginBottom: 10,
    marginLeft: 20,
    lineHeight: 20,
    color: 'red'
  },
})

export default SignUp;