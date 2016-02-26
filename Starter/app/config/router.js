import React, {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import MenuEmitter from '../config/emitters.js';

let Router = {
  getHome(props) {
    return {
      renderScene(navigator) {
        let Home = require('../components/home/Home.js').default
        return <Home navigator={navigator} {...props} />
      },
      getTitle() {
        return 'Home';
      },
      renderLeftButton(navigator) {
        return (
          <TouchableOpacity onPress={() => {
              MenuEmitter.emit('toggleMenu');
            }}>
            <Text style={[styles.buttonText, styles.buttonLeft]}>Menu</Text>
          </TouchableOpacity>
        );
      },
    };
  },
  getOnboarding() {
    return {
      getSceneClass() {
        return require('../components/onboarding/Onboarding.js').default;
      },
      getTitle() {
        return 'Starter';
      },
      showNavigationBar: false
    };
  },
  getSignIn() {
    return {
      getSceneClass() {
        return require('../components/accounts/SignIn.js').default;
      },
      getTitle() {
        return 'SignIn';
      }
    }
  },
  getSignUp() {
    return {
      getSceneClass() {
        return require('../components/accounts/SignUp.js').default;
      },
      getTitle() {
        return 'SignUp';
      }
    }
  },
  getTinder(props) {
    return {
      renderScene(navigator) {
        let Tinder = require('../components/tinder/Tinder.js').default
        return <Tinder navigator={navigator} {...props} />
      },
      getTitle() {
        return 'Tinder';
      },
      renderRightButton(navigator) {
        return (
          <TouchableOpacity onPress={() => {
              navigator.push(Router.getMatches(props))
            }}>
            <Text style={[styles.buttonText, styles.buttonRight]}>Matches</Text>
          </TouchableOpacity>
        );
      },
    }
  },
  getChat(props) {
    return {
      renderScene(navigator) {
        let Chat = require('../components/chat/Chat.js').default
        return <Chat navigator={navigator} {...props} />
      },
      getTitle() {
        return 'Chat';
      }
    }
  },
  getTabs(props) {
    return {
      renderScene(navigator) {
        let Tabs = require('../components/tabs/Tabs.js').default
        return <Tabs navigator={navigator} {...props} />
      },
      getTitle() {
        return 'Tabs';
      }
    }
  },
  getMatches() {
    return {
      renderScene(navigator) {
        let Matches = require('../components/tinder/Matches.js').default
        return <Matches navigator={navigator} />
      },
      getTitle() {
        return 'Matches';
      }
    }
  }
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 17,
    marginTop: 11,
    color: 'rgb(0, 122, 255)'
  },
  buttonLeft: {
    marginLeft: 6,
  },
  buttonRight: {
    marginRight: 6,
  }
})

export default Router
