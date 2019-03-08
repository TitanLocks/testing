import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image, Dimensions, ImageBackground, TextInput, KeyboardAvoidingView, TouchableOpacity, AysncSorage} from 'react-native';
import bgImage from './backgroundimblank.png';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class RegisterScreen extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundImage}>
        <View styles={styles.container}>
        <View style={{marginTop: 5}}></View>
        <View style={styles.btnContainer}>
        <TextInput
        style={styles.input}
        placeholder={'First Name'}
        placeholderTextColor={'grey'}
        underlineColorAndroid='transparent'
        />
        <TextInput
        style={styles.input}
        placeholder={'Last Name'}
        placeholderTextColor={'grey'}
        underlineColorAndroid='transparent'
        />
        <TextInput
        style={styles.input}
        placeholder={'example@email.com'}
        placeholderTextColor={'grey'}
        underlineColorAndroid='transparent'
        />
        <TextInput
        style={styles.input}
        placeholder={'Phone Number'}
        placeholderTextColor={'grey'}
        underlineColorAndroid='transparent'
        />
        <TextInput
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry={true}
        placeholderTextColor={'grey'}
        underlineColorAndroid='transparent'
        />
        <TextInput
        style={styles.input}
        placeholder={'Confirm Password'}
        secureTextEntry={true}
        placeholderTextColor={'grey'}
        underlineColorAndroid='transparent'
        />

                  <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.text}>Register</Text>
                  </TouchableOpacity>
                  <View>
                  <TouchableOpacity><Text style={{color: 'lightgray', marginTop: 10, alignItems: 'center',}}>Already have an account? Sign-in</Text></TouchableOpacity>
                  </View>
                  </View>
                  </View>
      </ImageBackground> 
      );      
    }
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
},
  inputContainer:{
    alignSelf: 'center',
},
  input: {
  width: 350,
  height: 45,
  borderRadius: 25,
  paddingLeft: 45,
  color: 'black',
  backgroundColor: 'rgba(255,255,255,0.7)',
  alignItems: 'center',
  fontSize: 16,
  marginHorizontal: 25,
  marginTop: 15
},
  btnContainer:{
    alignItems: 'center',
},
  btnRegister:{
    width: 350,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#2c0366',
    alignItems: 'center',
    marginTop: 15,
},
  backgroundImage: {
  width: WIDTH,
  height: HEIGHT,
},
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    marginTop: 10,
}
});
AppRegistry.registerComponent('RegisterScreen', () => RegisterScreen)