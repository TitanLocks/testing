import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image, Dimensions, ImageBackground, TextInput, KeyboardAvoidingView, TouchableOpacity, AysncSorage,} from 'react-native';
import bgImage from './backgroundimblank.png';
import logo from './ttlogo.png';

import Icon from 'react-native-vector-icons/Ionicons'
const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class LogInScreen extends Component {
  constructor(){
    super()
    this.state = {
      showPass: true,
      press: false
    }
  };
  checkLogin() {
  fetch('https://api.ttlock.com.cn/oauth2/token', { 
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: 'c54850a0d7f146288d18dc773d9846f6',
      client_secret: '83051eea763c98bb268c322c05e2ba17',
      grant_type: 'password',
      username: '+16148869905',
      password: '09eddce415b054e44bfd68695a34750e',
      redirect_uri: 'http://titanlocks.co',
    }),
  })
  .then((response) => response)
      console.log(response)
};
    showPass = () => {
    if (this.state.press == false) {
      this.setState ({ showPass: false, press: true})
    } else {
      this.setState ({ showPass: true, press: false})
    }
  };
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundImage}>
        <View styles={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
          <View>
        <TextInput
        style={styles.input}
        placeholder={'example@email.com'}
        placeholderTextColor={'grey'}
        underlineColorAndroid='transparent'
        />
        <Icon name={'ios-person'} size={28} color={'rgba(75, 75, 75, 1)'} style={styles.inputIcon} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.input}
        placeholder={'Password'}
        secureTextEntry={this.state.showPass}
        placeholderTextColor={'grey'}
        underlineColorAndroid='transparent'
        />
        <Icon name={'ios-lock'} size={28} color={'rgba(75, 75, 75, 1)'} style={styles.inputIcon} />
        <TouchableOpacity style={styles.btnEye}
        onPress={this.showPass.bind(this)}>
        <Icon name={this.state.press == false ? 'ios-eye' : 'ios-eye-off'} size={26} color={'rgba(25, 25, 25, 1)'}/>
                  </TouchableOpacity>
        <View style={styles.btnContainer}>
                  <TouchableOpacity style={styles.btnRegister} onPress={_ => this.checkLogin()}>
                    <Text style={styles.text}>Login</Text>
                  </TouchableOpacity>
                  <View>
                  <TouchableOpacity><Text style={{color: 'lightgray', marginTop: 10, alignItems: 'center',}}>Forgot Password?</Text></TouchableOpacity>
                  </View>
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
  logoContainer: {
  height: '10%',
  alignItems: 'center',
  justifyContent: 'center',
}, 
  inputContainer:{
  alignContent: 'center'
},
  input: {
  width: 350,
  height: 45,
  borderRadius: 25,
  paddingLeft: 45,
  color: 'black',
  backgroundColor: 'rgba(255,255,255,0.7)',
  fontSize: 16,
  marginHorizontal: 25,
  marginTop: 10
},
  logo: {
  width: 320,
  height: 155,
  marginBottom: 200,
  justifyContent: 'center'
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
    marginTop: 20,
},
  backgroundImage: {
  width: WIDTH,
  height: HEIGHT,
  alignItems: 'center',
  justifyContent: 'center',
},
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    marginTop: 10,
},
  inputIcon: {
    position: 'absolute',
    marginTop: 10,
    top: 8,
    left: 42,
  },
  btnEye: {
    position: 'absolute',
    marginTop: 10,
    top: 8,
    right: 42,
  }
});
AppRegistry.registerComponent('LogInScreen', () => LogInScreen)