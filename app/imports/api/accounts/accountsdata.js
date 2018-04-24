import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const AccountsData = new Mongo.Collection('AccountsData');

/** Create a schema to constrain the structure of documents associated with this collection. */
const AccountSchema = new SimpleSchema({
  username: String,
  email: String,
  password: String,
  image: String,
  description: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
AccountsData.attachSchema(AccountSchema);

/** Make the collection and schema available to other code. */
export { AccountsData, AccountSchema };
