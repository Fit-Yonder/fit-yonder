import React from 'react';
import { Card, Image, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Workout extends React.Component {

  render() {
    const cardstyle = {
      color: 'white',
      height: '35em',
      width: '25em',
      padding: '1em',
    };

    return (
        <Card centered>
          <div className='blue-background' style={cardstyle}>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.workout.image}/>
            <Card.Header>
              {this.props.workout.name}
            </Card.Header>
            <Card.Meta>
              {this.props.workout.category}
            </Card.Meta>
            <Card.Description>
              {this.props.workout.description}
            </Card.Description>
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
