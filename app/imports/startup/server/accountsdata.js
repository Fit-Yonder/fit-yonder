import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { AccountsData } from '../../api/accountsdata/accountsdata.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.eventHolder} (${data.owner})`);
  AccountsData.insert(data);
}

/** Initialize the collection if empty. */
if (AccountsData.find().count() === 0) {
  if (Meteor.settings.defaultAccountsData) {
    console.log('Creating default AccountsData.');
    Meteor.settings.defaultAccountsData.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('AccountsData', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return AccountsData.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('AccountsDataAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return AccountsData.find();
  }
  return this.ready();
});
