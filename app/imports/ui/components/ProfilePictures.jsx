/* eslint-disable max-len */
import React from 'react';
import { Grid, Container, Button, Image } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
 import { Accounts } from '/imports/api/accounts/accounts';
import { withTracker } from 'meteor/react-meteor-data';

import { withRouter } from 'react-router-dom';

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
                {/* <Image src="https://www.tenforums.com/geek/gars/images/2/types/thumb__ser.png" size='small' rounded/> */}
                <Image src={this.props.accounts.image} size='small' rounded/>
                <p>{this.props.accounts.emails}</p>
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
ProfilePictures.propTypes = {
  accounts: PropTypes.array.isRequired,
};


/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Accounts');
  return {
    accounts: Accounts.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ProfilePictures);
