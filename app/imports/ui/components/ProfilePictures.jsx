import React from 'react';
import { Grid, Container, Button, Image } from 'semantic-ui-react';
import { Profiles } from '/imports/api/profile/profile';
import { Meteor } from "meteor/meteor";
import PropTypes from 'prop-types';

class ProfilePictures extends React.Component {
  render() {
    const ProfilePicturesCoverSpace = {
      paddingTop: '10px',


    };
    return (
        <div className='profile-cover-mockup' style={ProfilePicturesCoverSpace}>


          <Grid centered columns={8} className="">
            <Grid.Row>

              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
                <Image src={this.props.profiles.image} size='small' rounded/>
              </Grid.Column>
              <Grid.Column>
            </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>


        </div>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ProfilePicturesAdmin.propTypes = {
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Workouts');
  return {
    profiles: Profiles.find({username.Meteor.user().email}).fetch(),
    ready: subscription.ready(),
  };
})(ProfilePictures);