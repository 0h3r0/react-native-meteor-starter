import React, {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import Button from 'apsl-react-native-button';

module.exports = React.createClass({
  renderButton() {
    return (
        <Button
        style={styles.button}
        onPress={this.props.handlePress}
      >
        Get started
      </Button>
    )
  },
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.subtitle}>{this.props.subtitle}</Text>
        {this.props.showButton ? this.renderButton() : null}
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30,
    marginBottom: 5,
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center'
  },
  button: {
    margin: 10
  }
})
