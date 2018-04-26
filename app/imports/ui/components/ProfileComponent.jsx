/* eslint-disable max-len */
import React from 'react';
import { Grid, Container, Segment, Image } from 'semantic-ui-react';
import { Profiles } from '/imports/api/profile/profile';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter } from 'react-router-dom';

class ProfileComponent extends React.Component {

  render() {
    const ProfilePicturesCoverSpace = {
      paddingTop: '10px',

    };
    const ProfilePadding = {
      paddingTop: '1em',
      color: 'white',
    };

    const ProfileGroupsStyle = {
      paddingTop: '0em',
      color: 'white',

    };

    function workoutList(a, b) {
      let text = '';
      let i;
      const workoutName = a;
      const workoutNameCount = b;
      for (i = 0; i < a.length; i++) {
        text += workoutName[i];
        text += ': ';
        text += workoutNameCount[i];
        text += ' reps';
        if(i != workoutName.length -1){
          text += ' \n ';
        }
        else{
          text += '';
        }
      }
      return text;
    }

    if (this.props.profile.owner === Meteor.user().username) {
      return (
          <div>
            <div className='profile-cover-mockup' style={ProfilePicturesCoverSpace}>

              {/* profile top */}
              <Grid centered columns={8} className="">
                <Grid.Row>

                  <Grid.Column>
                  </Grid.Column>
                  <Grid.Column>
                    {/* <Image src={this.props.profiles.image} size='small' rounded/> */}
                    <Image src={this.props.profile.image} size='small' rounded/>
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
                <Grid.Row>

                  <Grid.Column>
                  </Grid.Column>
                  <Grid.Column>
                    {/* <Image src={this.props.profiles.image} size='small' rounded/> */}
                    <h1 className="white-text">{this.props.profile.firstName} {this.props.profile.lastName}</h1>
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
            {/* profile middle */}
            <div className='yellow-background'>
              {/*<div className='all-page-background'>*/}
              <br></br>
              <Container>
                <Segment style={ProfilePadding} textAlign='center' inverted className="blue-background white-text">


                  <h2 className="white-text">Bio</h2>
                  <p className="white-text">{this.props.profile.description}</p>
                </Segment>
              </Container>
              <br></br>
              <Container>
                <Segment style={ProfilePadding} textAlign='center' inverted className="blue-background white-text">

                  <h2 className="white-text">Completed Workouts</h2>
                  <p className="white-text">
                    {workoutList(this.props.profile.workouts, this.props.profile.workoutsCount).split('\n').map((item, key) => {
                      return <span key={key}>{item}<br/></span>
                    })}

                    {/*{workoutList(this.props.profile.workouts, this.props.profile.workoutsCount)}</p>*/}
                  </p>
                </Segment>
              </Container>
              <br></br>
              <Container textAlign='center'>
                <Segment style={ProfilePadding} textAlign='center' inverted className="blue-background white-text">
                <h1>Groups</h1>
                </Segment>
              </Container>
              <br></br>
              <Container>
                <Image src={'http://resources.renishaw.com/download.aspx?lang=en&data=75769&btn=1'}/>
              </Container>
              <br></br>
            </div>

          </div>
      );
    }

    return (<div>
      {/* cant find profile */}
    </div>);

  }

}

ProfileComponent.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default withRouter(ProfileComponent);

// /** Require an array of Stuff documents in the props. */
// ProfilePictures.propTypes = {
//   profiles: PropTypes.object.isRequired,
//   ready: PropTypes.bool.isRequired,
// };
//
// /** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
// export default withTracker(() => {
//   // Get access to Profiles documents.
//   const subscription = Meteor.subscribe('Profiles');
//   console.log(`  Adding: ${Profiles.find({ owner: Meteor.user().emails[0].address }).fetch()} `);
//   return {
//     // profiles: Profiles.find({ owner: Meteor.user().emails[0].address }).fetch(),
//     profiles: Profiles.findOne({ owner: '${Meteor.user().emails[0].address}' }),
//     // profiles: Profiles.findOne((this.userId).username),
//     // profiles: Profiles.find({ owner: this.Meteor.user().username }).fetch()[0],
//     ready: subscription.ready(),
//   };
// })(ProfilePictures);
