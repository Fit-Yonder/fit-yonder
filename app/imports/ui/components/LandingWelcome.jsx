import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container, Button, Segment } from 'semantic-ui-react';

class LandingWelcome extends React.Component {
  render() {
    const topPadding = {
      paddingTop: '10px',


    };
    const landingWelcomeText = {
      paddingTop: '1em',
    };
    const whiteText = {
      color: 'white',
      fontSize: '150%',
    };
    const clearBackground = {
      color: 'white',
      fontSize: '300%',
    };
    return (
    <div className='all-page-background' style={topPadding}>


      <Grid columns={3} textAlign='center' style={landingWelcomeText}>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>

            <h1 style={clearBackground} className='border-outline'>Welcome to a new way to exercise</h1>


            <img src='/images/FitYonderLogo.png' height="250" width="250"/>
            <h4 style={whiteText} className='border-outline'>Fit Yonder is an application providing a platform for students and health and fitness
              professionals that allows them to post ideas for flexible and personalized fitness routines, things
              such as yoga etc. that can be done in one’s dorm room, or somewhere on campus.</h4>

            <Button size="huge"><Link to="/signup" className="link">Join</Link></Button>
        </Grid.Column>

        <Grid.Column>
            </Grid.Column>

      </Grid>


  </div>
    );
  }
}

export default LandingWelcome;
