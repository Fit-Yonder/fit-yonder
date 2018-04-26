import React from 'react';
import { Card, Button, Image, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Workouts } from '/imports/api/workout/workout';
import { Bert } from 'meteor/themeteorchef:bert';

class WorkoutAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  deleteCallback(error) {
    if (error) {
      Bert.alert({ type: 'danger', message: `Delete failed: ${error.message}` });
    } else {
      Bert.alert({ type: 'success', message: 'Delete succeeded' });
    }
  }

  onClick() {
    Workouts.remove(this.props.workout._id, this.deleteCallback);
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
                <Button fluid circular color='green'> Join workout! </Button>
              </div>
            </Card.Content>
            <Card.Content extra>
              {this.props.workout.owner}
              <br />
              <Button inverted basic onClick={this.onClick}>Delete</Button>
            </Card.Content>
          </div>
        </Card>
    );
  }
}

WorkoutAdmin.propTypes = {
  workout: PropTypes.object.isRequired,
};

export default withRouter(WorkoutAdmin);
