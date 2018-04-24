import React from 'react';
import { Grid, Container, Button, Segment } from 'semantic-ui-react';

class LandingWelcome extends React.Component {
  render() {
    const topPadding = {
      paddingTop: '10px',


    };
    const landingWelcomeText = {
      paddingTop: '15em',
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
    <div className='landing-background' style={topPadding}>


      <Grid columns={3} textAlign='center' style={landingWelcomeText}>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>

            <h1 style={clearBackground} className='border-outline'>Welcome to a new way to exercise</h1>
            <br></br>

            <img src='https://github.com/Fit-Yonder/Fit-Yonder.github.io/blob/master/images/FitYonderLogo.png?raw=true'/>
            <h4 style={whiteText} className='border-outline'>Fit Yonder is an application providing a platform for students and health and fitness
              professionals that allows them to post ideas for flexible and personalized fitness routines, things
              such as yoga etc. that can be done in one’s dorm room, or somewhere on campus.</h4>
            <br></br>
            <Button size="huge" color='grey'>Join</Button>
        </Grid.Column>

        <Grid.Column>
            </Grid.Column>

      </Grid>


  </div>
    );
  }
}

export default LandingWelcome;
