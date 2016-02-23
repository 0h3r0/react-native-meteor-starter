let ddpClient = require('./lib/ddpClient');

let MessagesDB = {};

MessagesDB.subscribe = (skip, limit) => {
  return ddpClient.subscribe('messages', [skip, limit])
};

MessagesDB.observe = (cb) => {
  let observer = ddpClient.connection.collections.observe(() => {
    let collection = ddpClient.connection.collections.messages;
    if (collection)
      return collection.find();
  });

  observer.subscribe((results) => {
    cb(results);
  });
};

MessagesDB.insert = (message) => {
  return ddpClient.call('Messages.insert', [message])
};

MessagesDB.messageCount = () => {
  return ddpClient.call('Messages.count');
}

module.exports = MessagesDB;
