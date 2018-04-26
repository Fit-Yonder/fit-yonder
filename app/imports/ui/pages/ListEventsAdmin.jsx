import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Events } from '/imports/api/event/event';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import EventAdmin from '/imports/ui/components/EventAdmin';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListEventsAdmin extends React.Component {

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
            {this.props.events.map((event, index) => <EventAdmin key={index} event={event} />)}
          </Card.Group>
        </Container>
        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListEventsAdmin.propTypes = {
  events: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Events');
  return {
    events: Events.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListEventsAdmin);
