import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Workouts = new Mongo.Collection('Workouts');

/** Create a schema to constrain the structure of documents associated with this collection. */
const WorkoutSchema = new SimpleSchema({
  name: String,
  image: String,
  description: String,
  category: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Workouts.attachSchema(WorkoutSchema);

/** Make the collection and schema available to other code. */
export { Workouts, WorkoutSchema };
