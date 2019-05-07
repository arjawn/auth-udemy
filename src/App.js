import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends React.Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDQQ2uV4N2yDzZD0X3yicNGvxf5zirYwCE',
      authDomain: 'authentication-e7e1b.firebaseapp.com',
      databaseURL: 'https://authentication-e7e1b.firebaseio.com',
      projectId: 'authentication-e7e1b',
      storageBucket: 'authentication-e7e1b.appspot.com',
      messagingSenderId: '1026296165625',
      appId: '1:1026296165625:web:e4118171414ea915'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true});
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  
  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            LogOut
          </Button>
      );
      case false:
        return <LoginForm />;

      default:
        return<Spinner size = "large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
