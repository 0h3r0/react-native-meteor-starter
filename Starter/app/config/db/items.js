let ddpClient = require('./lib/ddpClient');

let ItemsDB = {};

ItemsDB.subscribeToLists = () => {
  return ddpClient.subscribe('bills', [])
};

ItemsDB.observeLists = (cb) => {
  let observer = ddpClient.connection.collections.observe(() => {
    let collection = ddpClient.connection.collections.bills;
    if (collection)
      return collection.find();
  });

  observer.subscribe((results) => {
    cb(results);
  });
};

// ItemsDB.getLists = (userId) => {
//   return new Promise(function (resolve, reject){
//     resolve(ddpClient.connection.collections.lists.find());
//   });
// };
//
// ItemsDB.addNewList = (listName) => {
//   return ddpClient.call('Lists.insert', [false, listName]);
// };
//
// ItemsDB.changeListVisibility = (listId, userId) => {
//   let mod = {$unset: {userId: true}};
//
//   if (userId) {
//     mod = {$set: {userId: userId}};
//   }
//
//   return ddpClient.call('Lists.update', [listId, mod]);
// };
//
// ItemsDB.deleteList = (listId) => {
//   let todosColl = ddpClient.connection.collections.todos;
//   if (todosColl) {
//     let todos = todosColl.find();
//     for (var i = 0; i < todos.length; i++) {
//       ddpClient.call('Todos.remove', [todos[i]._id]);
//     }
//   }
//
//   return ddpClient.call('Lists.remove', [listId]);
// };

module.exports = ItemsDB;
