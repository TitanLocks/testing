import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry, Image, Dimensions, ImageBackground, TextInput, KeyboardAvoidingView, TouchableOpacity, AysncSorage} from 'react-native';
import bgImage from './backgroundimblank.png';
import logo from './ttlogo.png';

const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')

export default class FrontScreen extends Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.backgroundImage}>
        <View styles={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo} />
          </View>
            <View>
              <TouchableOpacity style={styles.btnLogin}>
                <Text style={styles.text}>Login</Text>
              </TouchableOpacity>
                  <TouchableOpacity style={styles.btnRegister}>
                    <Text style={styles.text}>Register</Text>
                  </TouchableOpacity>
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
  btnLogin:{
    width: 250,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#9872db',
    alignItems: 'center',
    marginTop: 20,
},
  logoContainer: {
  height: '55%',
  alignItems: 'center',
  justifyContent: 'center',
}, 
  logo: {
  width: 260,
  height: 125,
  marginTop: 10,
  alignItems: 'center',
  justifyContent: 'center'
},
  btnRegister:{
    width: 250,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#2c0366',
    alignItems: 'center',
    marginTop: 40,

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
}
});
AppRegistry.registerComponent('FrontScreen', () => FrontScreen)