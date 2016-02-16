import React from 'react-native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Button from 'react-native-button';

export default React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text>No connection :(</Text>
        <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={this.props.handlePress}
      >
        Try again
      </Button>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
