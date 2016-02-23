Messages = new Mongo.Collection('messages');

Messages.attachSchema(new SimpleSchema({
  content: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert)
        return new Date()
    }
  },
  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    optional: true
  }
}));

Meteor.methods({
  'Messages.insert': function(message) {
    message.owner = this.userId;
    return Messages.insert(message);
  },
  'Messages.count': function() {
    return Messages.find({}).count();
  }
});

Meteor.publish('messages', function(skip, limit) {
  return Messages.find({}, {skip: skip, limit: limit, sort: {createdAt: -1}});
})


const fixtures = [
  {
    content: 'message 1',
  },
  {
    content: 'message 2',
  },
  {
    content: 'message 3',
  }
]

Meteor.startup(() => {
  if (Messages.find().count() === 0){
    fixtures.forEach((f) => {
      Messages.insert(f);
    })
  }
})
