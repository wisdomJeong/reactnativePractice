import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyA-WGKdrd5PgTUCE5yZ8H3MRSrMkVx2jnY",
      authDomain: "auth-2b73d.firebaseapp.com",
      databaseURL: "https://auth-2b73d.firebaseio.com",
      storageBucket: "auth-2b73d.appspot.com",
      messagingSenderId: "368443280698"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
