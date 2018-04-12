import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import ProfilePictures from '../components/ProfilePictures';
import LandingDescription from '../components/LandingDescription';
import ProfileGraph from '../components/ProfileGraph';
import YellowLine from '../components/YellowLine';
import ProfileGroups from '../components/ProfileGroups';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <ProfilePictures/>
          <ProfileGraph/>
          <ProfileGroups/>
          <YellowLine/>
        </div>
    );
  }
}

export default Landing;
