'use strict';

import React, { StyleSheet, Text, View,Image} from 'react-native';

import TinderCards from './TinderCards.js';

const Cards = [
  {text: 'RED RED', backgroundColor: 'red'},
  {text: 'ppppppp', backgroundColor: 'purple'},
  {text: 'vegetarian', backgroundColor: 'green'},
  {text: 'sea', backgroundColor: 'blue'},
]

let Card = React.createClass({
  render() {
    return (
      <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
})

export default React.createClass({
  handleYup (card) {
    console.log("yup")
  },
  handleNope (card) {
    console.log("nope")
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);
  },
  render() {
    return (
      <TinderCards renderCard={(cardData) => <Card {...cardData} />} cards={Cards} handleYup={this.handleYup} handleNope={this.handleNope} cardRemoved={this.cardRemoved} />
    )
  }
})

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'grey'
  }
})
