import React, {
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import OnboardingPage from './OnboardingPage.js';
import SimpleTabBar from './SimpleTabBar.js';
import Button from 'apsl-react-native-button';

import Home from '../home/home.js';

import Accounts from '../../config/db/accounts.js';

import SignUp from '../accounts/signUp.js';
import SignIn from '../accounts/signIn.js';

module.exports = React.createClass({
  handlePressSignUp() {
    let nav = this.props.navigator;
    nav.push({
      title: 'Sign Up',
      component: SignUp,
      sceneConfig: Navigator.SceneConfigs.VerticalUpSwipeJump,
      leftButton: {
        title: 'Cancel',
        handler: () => nav.pop()
      }
    })
  },
  handlePressSignIn() {
    let nav = this.props.navigator;
    nav.push({
      title: 'Sign In',
      component: SignIn,
      sceneConfig: Navigator.SceneConfigs.VerticalUpSwipeJump,
      leftButton: {
        title: 'Cancel',
        handler: () => nav.pop()
      }
    })
  },
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView tabBarUnderlineColor="white" renderTabBar={() => <SimpleTabBar/>}  tabBarPosition="bottom">
          <OnboardingPage tabLabel="React" title="Welcome to Bitwala" style={{backgroundColor: "3498db"}} />
          <OnboardingPage tabLabel="React 2" title="Send money anywhere with Bitcoin" style={{backgroundColor: "e74c3c"}} />
          <OnboardingPage tabLabel="React 3" title="Fast, cheap and easy" style={{backgroundColor: "#27ae60"}} />
        </ScrollableTabView>
        <View style={styles.buttonContainer}>
          <Button onPress={this.handlePressSignUp} style={styles.button}>Sign up</Button>
          <Button onPress={this.handlePressSignIn} style={styles.button}>Sign in </Button>
        </View>
      </View>
    )
  }
})

const styles = {
  container: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  button: {
    borderColor: "white",
    backgroundColor: "white",
  }
}
