import React from 'react-native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Navigator,
} from 'react-native';

import styles from './_accountsStyles';

import Accounts from '../../config/db/accounts';
import Home from '../home/Home.js';

export default React.createClass({
  // Configuration
  displayName: 'Sign In',

  // Initial State
  getInitialState() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  // Event Handlers
  handleSignIn() {
    this.setState({
      error: null
    })

    let { email, password } = this.state;

    if (!email || !password) {
      return this.setState({error: 'Please enter all fields.'});
    }

    this.setState({email: '', password: ''}, () => {
      Accounts.signIn(email, password).then( (result) => {
        console.log("Logged in successfully");
        this.props.navigator.push({
          title: 'Home',
          component: Home,
          sceneConfig: Navigator.SceneConfigs.VerticalUpSwipeJump
        })
        let userId = result.userId;
        this.props.handleLoggedIn(userId);
      }, (err) => {
        Alert.alert("Error", err.reason)
      })
    });
  },

  // Component Render
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Sign In</Text>
        <TextInput
          ref='email'
          style={styles.input}
          placeholder="email address"
          autoFocus={true}
          onChangeText={(text) => this.setState({email: text})}
          />

        <TextInput
          ref='password'
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({password: text})}
          />

        <TouchableOpacity
          onPress={this.handleSignIn}
          style={styles.button}
          >
          <Text style={styles.buttonText}>
            Sign In
          </Text>
        </TouchableOpacity>

        <Text style={styles.error}>{this.state.error}</Text>
      </View>
    );
  }
});
