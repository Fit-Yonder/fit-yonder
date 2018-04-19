import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Workouts } from '/imports/api/workout/workout';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Workout from '/imports/ui/components/Workout';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListWorkouts extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <div className='yellow-background' style={ { padding: '4em' } }>
        <Container>
          <Header as="h2" textAlign="center">Welcome to your workout feed!</Header>
          <Card.Group>
            {this.props.workouts.map((workout, index) => <Workout key={index} workout={workout} />)}
          </Card.Group>
        </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListWorkouts.propTypes = {
  workouts: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Workouts');
  return {
    workouts: Workouts.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListWorkouts);
