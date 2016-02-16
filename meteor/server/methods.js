Meteor.methods({
  'Users.create': function(email, password) {
    return Accounts.createUser({email: email, password: password});
  }
});
