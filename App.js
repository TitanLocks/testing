import React, {Component} from 'react';
import { FlatList, ActivityIndicator, Text, View, AppRegistry,} from 'react-native';
import aws_exports from './aws-exports';
import Amplify, { Analytics, Storage, Auth } from 'aws-amplify';
import awsmobile from './aws-exports';
import LogInScreen from './components/LogInScreen/LogInScreen';
import RegisterScreen from './components/RegisterScreen/RegisterScreen';
import TestLogin from './components/TestLogin/TestLogin';


Amplify.configure(awsmobile);

export default class App extends Component {
  render() {
    return (
      <View>
        <TestLogin />
      </View>
    );
  }
};
