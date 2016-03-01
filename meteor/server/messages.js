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
    check(message, {content: String});

    message.owner = this.userId;
    return Messages.insert(message);
  },
  'Messages.count': function() {
    return Messages.find({}).count();
  }
});

Meteor.publishComposite('messages', function(skip, limit) {
  check(skip, Match.Optional(Number));
  check(limit, Match.Optional(Number));
  return {
     find: function() {
       return Messages.find({}, {skip: skip, limit: limit, sort: {createdAt: -1}});
     },
     children: [
       {
         find: function(message) {
           return Meteor.users.find(message.owner);
         }
       }
     ]
  }
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
