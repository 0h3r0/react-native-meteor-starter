Matches = new Mongo.Collection('matches');

Matches.attachSchema(new SimpleSchema({
  key: {
    type: String
  },
  yupCount: {
    type: Number,
    defaultValue: 0
  },
  nopeCount: {
    type: Number,
    defaultValue: 0
  }
}));

Meteor.methods({
  'Matches.upvote': function(key, isYup) {
    check(key, String);
    check(isYup, Boolean);

    _id = Matches.findOne({key: key})
      ? Matches.findOne({key: key})
      : Matches.insert({key: key})

    let modifier = isYup
      ? {$inc: {yupCount: 1}}
      : {$inc: {nopeCount: 1}}

    return Matches.update(_id, modifier);
  },
  'Matches.count': function() {
    return Matches.find().count();
  }
});

Meteor.publish('matches', function() {
  return Matches.find({});
})
