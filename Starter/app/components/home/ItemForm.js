'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          placeholder="Bla"
        />
    </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});
