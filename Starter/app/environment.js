import {Platform} from 'react-native';

getEnvironmentName = () => {
  // Logic for figuring out platform

  /*
  if (foo) {
    return 'production';
  },
  if (bar) {
    return 'stage';
  }
  */

  return 'dev';
}

Environments = {
  dev: {
    ddpOptions: {
      // Note: localhost for iOS, 10.0.2.2 for Android, 10.0.3.2 for Android Genymotion
      host : Platform.OS === 'ios' ? "localhost" : "10.0.3.2",
      port : 3000,
      ssl  : false,
      autoReconnect : true,
      autoReconnectTimer : 500,
      maintainCollections : true,
      ddpVersion : '1'
    }
  },
  stage: {

  },
  production: {

  }
}

module.exports = Environments[getEnvironmentName()]
