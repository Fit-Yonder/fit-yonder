import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import LandingWelcome from '../components/LandingWelcome';
import LandingDescription from '../components/LandingDescription';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
        <LandingWelcome/>
        <LandingDescription/>
        </div>
    );
  }
}

export default Landing;
