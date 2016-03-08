import React, {
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import OnboardingPage from './OnboardingPage';
import SimpleTabBar from './SimpleTabBar';
import Button from 'apsl-react-native-button';

import Accounts from '../../config/db/accounts';
import Router from '../../config/router';

export default React.createClass({
  handlePressSignUp() {
    this.props.navigator.push(Router.getSignUp())
  },
  handlePressSignIn() {
    this.props.navigator.push(Router.getSignIn())
  },
  render() {
    return (
      <View style={styles.container}>
        <ScrollableTabView tabBarUnderlineColor="white" renderTabBar={() => <SimpleTabBar/>}  tabBarPosition="bottom">
          <OnboardingPage tabLabel="0" title="Welcome to TinderChatCrud" style={{backgroundColor: "#3498db"}} />
          <OnboardingPage tabLabel="1" title="Your favorite apps" style={{backgroundColor: "#e74c3c"}} />
          <OnboardingPage tabLabel="2" title="Built with React Native" style={{backgroundColor: "#27ae60"}} />
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
    backgroundColor: 'white'
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
