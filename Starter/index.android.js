'use strict';

import React, {
  AppRegistry,
} from 'react-native';

import Main from './app/components/Main';

let Starter = React.createClass({
  render: function() {
    return (
      <Main />
    );
  }
});

AppRegistry.registerComponent('Starter', () => Starter);
