import React from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { Profiles } from '/imports/api/profile/profile';
import { withTracker } from 'meteor/react-meteor-data';
// import { Grid, Image } from 'semantic-ui-react';
// import ProfilePictures from '../components/ProfilePictures';
// import LandingDescription from '../components/LandingDescription';
import ProfileComponent from '../components/ProfileComponent';
import YellowLine from '../components/YellowLine';
// import ProfileGroups from '../components/ProfileGroups';


/** A simple static component to render some text for the landing page. */
class Profile extends React.Component {
  render() {
    return (
        <div>
          {/* <ProfileComponent/> */}
          {this.props.profiles.map((profile, index) => <ProfileComponent key={index} profile={profile}/>)}
          {/* <ProfileGraph/> */}
          {/* <ProfileGroups/> */}
          <YellowLine/>
        </div>
    );
  }
}
/** Require an array of Stuff documents in the props. */
Profile.propTypes = {
  profiles: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Profiles');
  return {
    profiles: Profiles.find({}).fetch(),
    // profiles: Profiles.findOne({ owner: 'admin@foo.com' }), doesnt work

  ready: subscription.ready(),
  };
})(Profile);

// export default Landing;
//
//
//
// /** Require an array of Stuff documents in the props. */
// Profile.propTypes = {
//   profiles: PropTypes.array.isRequired,
//   loggedIn: PropTypes.string.isRequired,
//   ready: PropTypes.bool.isRequired,
// };
//
// /** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
// export default withTracker(() => {
//   // Get access to Stuff documents.
//   const subscription = Meteor.subscribe('Profiles');
//   return {
//     profiles: Profiles.find({}).fetch(),
//     loggedIn: Meteor.user(),
//     ready: subscription.ready(),
//   };
// })(ListWorkouts);
