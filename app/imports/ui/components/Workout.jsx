import React from 'react';
import { Card, Button, Image, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Profiles, ProfileSchema } from '/imports/api/profile/profile';
import { Bert } from 'meteor/themeteorchef:bert';
import { withRouter } from 'meteor/react-meteor-data';
// import { withTracker } from 'meteor/react-meteor-data';



class Workout extends React.Component {

  onClick() {
    const newArray = doc.workouts; //newArray
    newArray.push(this.props.workout.name);
    Profiles.update(_id, { workouts: newArray }, (error) => (error ?
        Bert.alert({ type: 'danger', message: `Update failed: ${error.message}` }) :
        Bert.alert({ type: 'success', message: 'Update succeeded' })));
  }

  render() {
    const cardstyle = {
      color: 'white',
      padding: '2em',
    };

    return (

        <Card fluid color='blue'>
          <div className='blue-background' style={cardstyle}>
            <Card.Content>
              <Image floated='right' height="250" width="250" src={this.props.workout.image}/>
              <Card.Header>
                {this.props.workout.name}
              </Card.Header>
              <Card.Meta color='white'>
                {this.props.workout.category}
              </Card.Meta>
              <Card.Description>
                {this.props.workout.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='blue-background'>
                <Button fluid circular color='green' onClick={this.onClick}> Join workout! </Button>
              </div>
            </Card.Content>
            <Card.Content extra>
              <Link to={`/edit/${this.props.workout._id}`}>Edit</Link>
            </Card.Content>
          </div>
        </Card>
    );
  }
}

Workout.propTypes = {
  workout: PropTypes.object.isRequired,
  doc: PropTypes.object,
  model: PropTypes.object,
  ready: PropTypes.bool.isRequired,
};

//
// export default withRouter(({ match }) => {
//   // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
//   const documentId = match.params._id;
//   // Get access to Profiless documents.
//   const subscription = Meteor.subscribe('Profiles');
//
//   return {
//     doc: Profiles.findOne({ owner: Meteor.user().username }),
//     ready: subscription.ready(),
//   };
// })(Workout);




/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(({ match }) => {
  // Get the documentID from the URL field. See imports/ui/layouts/App.jsx for the route containing :_id.
  const documentId = match.params._id;
  // Get access to Profiless documents.
  const subscription = Meteor.subscribe('Profiles');

  return {
    doc: Profiles.findOne({ owner: Meteor.user().username }),
    ready: subscription.ready(),
  };
})(Workout);

