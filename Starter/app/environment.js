getPlatform = () => {
  // Logic for figuring out platform
  return 'dev'
}

Environments = {
  dev: {
    ddpOptions: {
      // All properties optional, defaults shown
      host : "localhost",
      port : 3000,
      ssl  : false,
      autoReconnect : true,
      autoReconnectTimer : 500,
      maintainCollections : true,
      ddpVersion : '1'
    }
  }
}

module.exports = Environments[getPlatform()]
