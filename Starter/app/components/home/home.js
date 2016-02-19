'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  Navigator
} from 'react-native';

import Accounts from '../../config/db/accounts.js';
import Onboarding from '../onboarding/Onboarding.js';

import Tabs from '../tabs/Tabs.js';
import Tinder from '../tinder/Tinder.js';
import Chat from '../chat/Chat.js';

export default React.createClass({
  handlePress(route) {
    let nav = this.props.navigator;
    nav.push({...route,
      sceneConfig: {...Navigator.SceneConfigs.FloatFromRight, gestures: false},
      leftButton: {
        title: 'Back',
        handler: () => nav.pop(),
        gestures: false
      }
    })
  },
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows([
        {
          title: "Tinder",
          description: "Like dating, with colors",
          component: Tinder
        },
        {
          title: "Tabs",
          description: "Slide and CRUD",
          component: Tabs
        },
        {
          title: "Chat",
          description: "Hurl abuse",
          component: Chat
        }
      ]),
    };
  },
  renderRow(route) {
    return (
      <TouchableOpacity ref={route.title} style={styles.row} onPress={() => this.handlePress(route) }>
        <Image
          source={{uri: "http://loremflickr.com/g/320/240/paris"}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{route.title}</Text>
          <Text style={styles.subtitle}>{route.description}</Text>
        </View>
      </TouchableOpacity>
    )
  },
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
   subtitle: {
    textAlign: 'center',
  },
});
