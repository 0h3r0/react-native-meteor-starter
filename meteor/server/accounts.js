Meteor.methods({
  'Users.create': function(username, email, password) {

    check(username, String);
    check(email, String);
    check(password, String);

    return Accounts.createUser({username: username, email: email, password: password});
  }
});
