'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  PixelRatio,
  Image
} from 'react-native';

import ItemsDB from '../../config/db/items';
import icon from '../../images/fa-cog/fa-cog.png';
import Button from 'apsl-react-native-button';
import Onboarding from '../onboarding/Onboarding';

module.exports = React.createClass({
  getInitialState: () => {
    return {
      items: []
    };
  },

  componentWillMount() {
    ItemsDB.subscribeToLists()
      .then(() => {
        ItemsDB.observeLists((items) => {
          this.setState({
            items: items
          });
        });
      })
      .catch((err) => {
        console.log('Error: ', err);
      });
  },

  getDataSource(items){
    items = items || [];
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(items);
  },


  renderRow(transaction) {
    return (
      <View key={transaction._id} style={styles.row}>
        <Image
          source={icon}
          style={styles.icon}
        />
        <View style={styles.middle}>
          <Text>{transaction.recipient}</Text>
        </View>
        <View style={styles.left}>
          <Text>{transaction.currency} {transaction.amount}</Text>
        </View>
      </View>
    )
  },
  handlePress() {
    this.props.handleLogOut();
    this.props.navigator.push({
      component: Onboarding
    })
  },

  // Component Render
  render() {
    return (
      <View>
        <Button onPress={this.handlePress}>Log out</Button>
        <ListView
          dataSource={this.getDataSource(this.state.items)}
          renderRow={this.renderRow}
          />
      </View>
    );
  }
})

const styles = StyleSheet.create({
  row: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  middle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {

  },
  icon: {
    width: 20,
    height: 20
  },
  border: {
    height: 1 / PixelRatio.get(),
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  rightIcon: {
    position: 'absolute',
    right: 15,
    tintColor: 'rgba(0, 0, 0, 0.25)'
  },
  incompleteText: {
    color: '#ffffff',
  },
  incomplete: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
