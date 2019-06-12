import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Button, Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };
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

    // User for handling when a user signs in or out
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>{'Log Out'}</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header text='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
