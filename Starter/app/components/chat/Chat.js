'use strict'

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';

import ChatForm from './ChatForm.js';
import MessagesDB from '../../config/db/messages.js';

module.exports = React.createClass({
  getInitialState() {
    return {
      messages: []
    }
  },

  componentWillMount() {
    MessagesDB.subscribeToLists()
      .then(() => {
        MessagesDB.observeLists((messages) => {
          this.setState({
            messages: messages
          });
        });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  },

  renderMessage(message) {
    return (
      <View style={styles.message} key={message._id}>
        <Text>{message.content}</Text>
      </View>
    )
  },

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.messages.map( this.renderMessage )}
      </ScrollView>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  message: {
    padding: 20,
    marginTop: 100
  }
})
