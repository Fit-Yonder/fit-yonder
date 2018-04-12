import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import LandingWelcome from '../components/LandingWelcome';
import LandingDescription from '../components/LandingDescription';
import GrayLine from '../components/GrayLine';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
        <LandingWelcome/>
        <LandingDescription/>
          <GrayLine/>
        </div>
    );
  }
}

export default Landing;
