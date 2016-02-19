Items = new Mongo.Collection('items');

/*
Schema from Meteor packages aldeed:simple-schema and aldeed:collection2
*/

Items.attachSchema(new SimpleSchema({
  title: {
    type: String
  },
  itemType: {
    type: String,
    allowedValues: ['book', 'band', 'film']
  },
  owner: {
    type: String,
    regEx: SimpleSchema.RegEx.Id
  },
  isChecked: {
    type: Boolean,
    autoValue: () => {
      if (this.isInsert)
        return false;
    }
  },
  createdAt: {
    type: Date,
    autoValue: () => {
      if (this.isInsert)
        return new Date();
    }
  }
}));

let isDocOwner = (_id, userId) => {
  let item = Items.findOne(_id);
  return item.owner === userId;
}

Meteor.methods({
  'Items.insert': (item) => {
    return Items.insert(item);
  },
  'Items.update': (_id, modifier) => {

    if (isDocOwner(_id, this.userId))
      throw new Meteor.Error(403, "Cannot edit other users' docs");

    return Items.update(_id, modified);
  },
  'Items.remove': (_id) => {
    if (isDocOwner(_id, this.userId))
      throw new Meteor.Error(403, "Cannot delete other users' docs");

    return Items.remove(_id);
  }
});

Meteor.publish("items", () => {
  return Items.find({owner: this.userId});
})
