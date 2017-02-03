import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
   );
  }
}

export default App;
