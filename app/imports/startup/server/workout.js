import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Workouts } from '../../api/workout/workout.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Workouts.insert(data);
}

/** Initialize the collection if empty. */
if (Workouts.find().count() === 0) {
  if (Meteor.settings.defaultWorkouts) {
    console.log('Creating default Workouts.');
    Meteor.settings.defaultWorkouts.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Workouts', function publish() {
  if (this.userId) {
    const username = Meteor.users.findOne(this.userId).username;
    return Workouts.find({ owner: username });
  }
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('WorkoutsAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Workouts.find();
  }
  return this.ready();
});
