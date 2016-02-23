'use strict'

import React, {
  Component,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
} from 'react-native';

const window = Dimensions.get('window');
import Button from 'apsl-react-native-button';

export default React.createClass({
  render() {
    return (
      <ScrollView style={styles.container}>
        <Button onPress={this.props.handleLogOut}>
          Log out
        </Button>
      </ScrollView>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flex: 1,
    marginTop: 16,
    width: window.width,
    height: window.height,
  }
})
