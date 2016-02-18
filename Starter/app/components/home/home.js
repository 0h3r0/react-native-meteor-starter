'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Accounts from '../../config/db/accounts.js';
import Onboarding from '../onboarding/Onboarding.js';

import OnboardingPage from '../onboarding/OnboardingPage.js';
import MyTransactions from '../my-transactions/MyTransactions.js';

export default React.createClass({
  render() {
    return (
      <ScrollableTabView>
        <MyTransactions tabLabel="Payments" handleLoggedOut={this.props.handleLoggedOut} navigator={this.props.navigator} />
        <OnboardingPage tabLabel="React" title="Welcome to Bitwala" style={{backgroundColor: "3498db"}} />
      </ScrollableTabView>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
