import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDbx1RVQoPjaAavVZUNYM3uSfJEXn_U-vc',
      authDomain: 'manager-561cc.firebaseapp.com',
      databaseURL: 'https://manager-561cc.firebaseio.com',
      projectId: 'manager-561cc',
      storageBucket: 'manager-561cc.appspot.com',
      messagingSenderId: '23938797748',
      appId: '1:23938797748:web:58227b0141ef89ab'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={ store }>
        <Router />
      </Provider>
    );
  }
}

export default App;
