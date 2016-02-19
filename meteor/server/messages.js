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
  }
}));

Meteor.methods({
  'Messages.insert': (item) => {
    return Messages.insert(item);
  }
});

Meteor.publish("messages", () => {
  return Messages.find({}, {
    limit: 10
  });
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
