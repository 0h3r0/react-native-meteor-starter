'use strict';

import React, { StyleSheet, Text, View,Image} from 'react-native';

import TinderCards from './TinderCards.js';

let Card = React.createClass({
  render() {
    return (
      <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
})

const Cards = [
  {text: 'RED RED', backgroundColor: 'red'},
  {text: 'ppppppp', backgroundColor: 'purple'},
  {text: 'vegetarian', backgroundColor: 'green'},
  {text: 'sea', backgroundColor: 'blue'},
  {text: 'cyanara?', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]

const Cards2 = [
  {text: 'lemon', backgroundColor: 'yellow'},
  {text: 'Moo Moo 5', backgroundColor: 'maroon'}
]

export default React.createClass({
  getInitialState() {
    return {
      cards: Cards,
      outOfCards: false
    }
  },
  handleYup (card) {
    console.log("yup")
  },
  handleNope (card) {
    console.log("nope")
  },
  cardRemoved (index) {
    console.log(`The index is ${index}`);

    let CARD_REFRESH_LIMIT = 3

    if (this.state.cards.length - index <= CARD_REFRESH_LIMIT + 1) {
      console.log(`There are only ${this.state.cards.length - index - 1} cards left.`);

      if (!this.state.outOfCards) {

        console.log(`Adding ${Cards2.length} more cards`)

        this.setState({
          cards: this.state.cards.concat(Cards2),
          outOfCards: true
        })
      }

    }

  },
  render() {
    return (
      <TinderCards renderCard={(cardData) => <Card {...cardData} />} cards={this.state.cards} handleYup={this.handleYup} handleNope={this.handleNope} cardRemoved={this.cardRemoved} />
    )
  }
})

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    backgroundColor: 'grey'
  }
})
