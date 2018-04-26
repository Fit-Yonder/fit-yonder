import React from 'react';
import { Card, Button, Image, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Events } from '/imports/api/event/event';
import { Bert } from 'meteor/themeteorchef:bert';

class Event extends React.Component {

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
    Events.remove(this.props.event._id, this.deleteCallback);
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
              <Image floated='right' size='large' src={this.props.event.image}/>
              <Card.Header>
                {this.props.event.name}
              </Card.Header>
              <Card.Meta color='white'>
                {this.props.event.time}
                <br/>
                {this.props.event.location}
              </Card.Meta>
              <Card.Description>
                {this.props.event.description}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <div className='blue-background'>
                <Button fluid circular color='green'> Join event! </Button>
              </div>
            </Card.Content>
            <Card.Content extra>
              {this.props.event.owner}
              <br />
              <Button inverted basic onClick={this.onClick}>Delete</Button>
            </Card.Content>
          </div>
        </Card>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
};

export default withRouter(Event);
