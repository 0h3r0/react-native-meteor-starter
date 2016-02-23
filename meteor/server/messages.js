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
  'Messages.insert': (message) => {
    console.log(this.userId);
    message.owner = this.userId;
    return Messages.insert(message);
  }
});

Meteor.publish("messages", () => {
  console.log(this.userId);
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
