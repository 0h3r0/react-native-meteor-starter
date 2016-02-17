import React, {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import OnboardingPage from './OnboardingPage.js';
import BulletPointTabBar from './BulletPointTabBar.js';

module.exports = React.createClass({
  render() {
    return (
      <ScrollableTabView renderTabBar={() => <BulletPointTabBar someProp={'here'} />}  tabBarPosition="bottom">
        <OnboardingPage tabLabel="React" title="Welcome to Bitwala" />
        <OnboardingPage tabLabel="React 2" title="Send money anywhere with Bitcoin" />
        <OnboardingPage tabLabel="React 3" title="Fast, cheap and easy" showButton={true} />
      </ScrollableTabView>
    )
  }
})
