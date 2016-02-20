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

export default React.createClass({
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Bla</Text>
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
