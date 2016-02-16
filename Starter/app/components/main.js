import React, {
  StyleSheet,
  View,
  Text,
  Navigator,
} from 'react-native';

import Home from './home/home.js';
import NavigationBar from 'react-native-navbar';
import AppOptions from './appOptions';
import NoConnection from './NoConnection.js';

import ddpClient from '../config/db/lib/ddpClient';
import Accounts from '../config/db/accounts';

// Polyfill the process functionality needed for minimongo-cache
global.process = require("../config/db/lib/process.polyfill");

export default React.createClass({
  // Configuration
  displayName: 'Main',

  // Initial Value (State and Props)
  getInitialState() {
    return {
      loaded: false,
      connectionFailed: false
    };
  },

  // Try to establish DDP connection
  attemptConnection() {
    // Close any connections if active
    try {
      ddpClient.close()
    } catch (err) {
      console.log(err);
    }

    ddpClient.initialize()
      .then(() => {
        return Accounts.signInWithToken();
      })
      .then((res) => {
        return this.setState({
          loaded: true,
          connectionFailed: false
        });
      })
      .catch((err) => {
        this.setState({
          loaded: true,
          connectionFailed: true
        });
        return
      })
  },
  // Component Lifecycle
  componentWillMount() {
    this.attemptConnection();
  },

  componentWillUnmount() {
    ddpClient.close();
  },

  // Navigator Config
  configureScene(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.HorizontalSwipeJump;
  },

  renderScene(route, navigator) {
    let Component = route.component;

    let title = {};
    if (route.title) {
      title.title = route.title;
    }

    let leftButton = undefined;
    if (route.leftButton) {
      leftButton = route.leftButton;
    }

    let rightButton = undefined;
    if (route.rightButton) {
      rightButton = React.cloneElement(route.rightButton, {navigator: navigator});
    }

    return (
      <View style={styles.container}>
        <NavigationBar
          title={title}
          leftButton={leftButton}
          rightButton={rightButton}
          />

        <Component
          navigator={navigator}
          {...route.passProps}
          />
      </View>
    );
  },

  // Component Render
  render() {
    if (!this.state.loaded) {
      return (
        <View style={styles.loading}>
          <Text>Connecting...</Text>
        </View>
      );
    }

    if (this.state.connectionFailed) {
      return <NoConnection handlePress={this.attemptConnection} />
    }

    return (
      <Navigator
        initialRoute={{
          component: Home,
          title: "Todo Lists",
          rightButton: <AppOptions />
        }}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
      />
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
