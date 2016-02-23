let ddpClient = require('./lib/ddpClient');

let MessagesDB = {};

MessagesDB.subscribe = () => {
  return ddpClient.subscribe('messages', [])
};

MessagesDB.observeLists = (cb) => {
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

module.exports = MessagesDB;
