import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCd98qbv7KxXjiFM2Z0WcB-sfr3BRxcPmQ',
      authDomain: 'auth-35bf0.firebaseapp.com',
      databaseURL: 'https://auth-35bf0.firebaseio.com',
      projectId: 'auth-35bf0',
      storageBucket: 'auth-35bf0.appspot.com',
      messagingSenderId: '444891106942',
      appId: '1:444891106942:web:0997d440f8f3770f'
    });
  }
  render() {
    return (
      <View>
        <Header text='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
