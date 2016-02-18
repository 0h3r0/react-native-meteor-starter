import React from 'react-native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Navigator
} from 'react-native';

import styles from './_accountsStyles';

import Accounts from '../../config/db/accounts';
import Home from '../home/home.js';

export default React.createClass({
  // Configuration
  displayName: 'Sign Up',

  // Initial State
  getInitialState() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      error: null
    }
  },

  // Event Handlers
  handleSignUp() {
    this.setState({
      error: null
    })

    let { email, password, confirmPassword } = this.state;
    if (!email || !password || !confirmPassword) {
      return this.setState({error: 'Please enter all fields.'});
    }

    if (password !== confirmPassword) {
      return this.setState({error: 'Passwords must match.'});
    }

    this.setState({email: '', password: '', confirmPassword: ''}, () => {
      Accounts.signUp(email, password).then( (result) => {
        console.log("Signed up successfully");
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
        <Text style={styles.headerText}>Sign Up</Text>
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

        <TextInput
          ref='confirmPassword'
          style={styles.input}
          placeholder="confirm password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({confirmPassword: text})}
          />

        <TouchableOpacity
          onPress={this.handleSignUp}
          style={styles.button}
          >
          <Text style={styles.buttonText}>
            Sign Up
          </Text>
        </TouchableOpacity>

        <Text style={styles.error}>{this.state.error}</Text>
      </View>
    );
  }
});
