import React from 'react';
import { Card, Button, Image, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

class Workout extends React.Component {

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
              <Link to={`/edit/${this.props.workout._id}`}>Edit</Link>
            </Card.Content>
          </div>
        </Card>
    );
  }
}

Workout.propTypes = {
  workout: PropTypes.object.isRequired,
};

export default withRouter(Workout);
