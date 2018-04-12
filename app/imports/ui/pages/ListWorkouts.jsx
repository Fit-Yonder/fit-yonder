import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Workout from '/imports/ui/components/Workout';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListWorkouts extends React.Component {

  workouts = [{
    name: 'Mason Twists', image: 'https://workoutlabs.com/wp-content/uploads/watermarked/Weighted_Twist_F_WorkoutLabs.png', description: 'a type of exercise that is used to work the abdominal muscles by performing a twisting motion on the abdomen. The exercise is believed by those who practice it to build explosiveness in the upper torso, which may help in sports such as tennis, swimming, baseball, track & field, hockey, golf, lacrosse, or boxing.', category: 'abs',
  },
    {
      name: 'Wall Sits', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/WallsitSideview.png/220px-WallsitSideview.png', description: 'A wall sit is an exercise done to strengthen the quadriceps muscles. It is characterized by the two right angles formed by the body, one at the hips and one at the knees. The person wall sitting places their back against a wall with their feet shoulder width apart and a little ways out from the wall. Then, keeping their back against the wall, they lower their hips until their knees form right angles. This is a very intense work out for the quadriceps muscles. It can be very painful to hold this position for extended periods of time. Wall sits are used as a primary strengthening exercise in many sports requiring strong quadriceps like fencing, ice hockey, sailing (mostly small boat racing), skiing and track and field. This exercise is also used as a disciplinary activity in the armed forces. It takes up little space, and can be administered easily in classroom settings to misbehaving soldiers-in-training.\n' +
      '\n', category: 'legs',
    },
    {
      name: 'Push-Up', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Push_up_%28PSF%29.png/220px-Push_up_%28PSF%29.png', description: ' push-up (or press-up) is a common calisthenics exercise performed in a prone position by raising and lowering the body using the arms. Push-ups exercise the pectoral muscles, triceps, and anterior deltoids, with ancillary benefits to the rest of the deltoids, serratus anterior, coracobrachialis and the midsection as a whole. Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training. They are also a common form of punishment used in the military, school sport, or in some martial arts disciplines.', category: 'full-body',
    },
  ];

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>List Workouts</Header>
          <Card.Group>
            {this.workouts.map((workout, index) => <Workout key={index} workout={workout} />)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListWorkouts.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListWorkouts);
