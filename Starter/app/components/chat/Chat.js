'use strict'

import React, {
  Component,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions
} from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;

import ChatForm from './ChatForm.js';
import MessagesDB from '../../config/db/messages.js';

import KeyboardSpacer from './KeyboardSpacer.js';

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
    console.log(message);
    console.log(this.props.user._id);
    return (
      <View style={[styles.message, message.owner === this.props.user._id ? styles.myMessage : null]} key={message._id}>
        <Text>{message.content}</Text>
      </View>
    )
  },

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.messages.map( this.renderMessage )}
        </ScrollView>
        <KeyboardSpacer />
        <ChatForm />
      </View>
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
    marginTop: 10,
    padding: 20,
    backgroundColor: '#eee',
    margin: 10,
    borderRadius: 5,
    maxWidth: WINDOW_WIDTH * .8
  },
  myMessage: {
    right: 0,
    backgroundColor: 'blue'
  }
})
