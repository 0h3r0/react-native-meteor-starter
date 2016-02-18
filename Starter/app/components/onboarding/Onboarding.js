import React, {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import OnboardingPage from './OnboardingPage.js';
import SimpleTabBar from './SimpleTabBar.js';
import Button from 'apsl-react-native-button';

module.exports = React.createClass({
  render() {
    return (
      <ScrollableTabView renderTabBar={() => <SimpleTabBar/>}  tabBarPosition="bottom">
        <OnboardingPage tabLabel="React" title="Welcome to Bitwala" style={{backgroundColor: "3498db"}} />
        <OnboardingPage tabLabel="React 2" title="Send money anywhere with Bitcoin" style={{backgroundColor: "e74c3c"}} />
        <OnboardingPage tabLabel="React 3" title="Fast, cheap and easy" style={{backgroundColor: "#27ae60"}} renderButton={() => <Button style={styles.button} textStyle={styles.buttonTextStyle} onPress={this.props.handlePress}>Get started</Button>} />
      </ScrollableTabView>
    )
  }
})

const styles = {
  button: {
    margin: 10,
    borderColor: "white"
  },
  buttonTextStyle: {
    color: "white"
  }
}
