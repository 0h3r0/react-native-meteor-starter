'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Items from './Items.js';

export default React.createClass({
  render(){
    return (
      <ScrollableTabView>
        <Items tabLabel="Payments" handleLoggedOut={this.props.handleLoggedOut} navigator={this.props.navigator} />
        <View tabLabel="text"><Text>bla</Text></View>
      </ScrollableTabView>
    )
  }
})
