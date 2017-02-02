import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBLBWiED7Ot25XWTiYmdumJE0GbXFBfy2U',
      authDomain: 'manager-33988.firebaseapp.com',
      databaseURL: 'https://manager-33988.firebaseio.com',
      storageBucket: 'manager-33988.appspot.com',
      messagingSenderId: '992633455990'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
   );
  }
}

export default App;
