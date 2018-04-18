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
    var whiteText = {
      color: 'white',
    };
    return (
    <div className='landing-background' style={topPadding}>


      <Grid columns={3} textAlign='center' style={landingWelcomeText}>
        <Grid.Column>
        </Grid.Column>
        <Grid.Column>

          <Segment textAlign='center' inverted className="blue-background">
            <h1 style={whiteText}>Welcome to a new way to exercise</h1>
            <br></br>
            <h4 style={whiteText}>Fit Yonder is an application providing a platform for students and health and fitness
              professionals that allows them to post ideas for flexible and personalized fitness routines, things
              such as yoga etc. that can be done in one’s dorm room, or somewhere on campus.</h4>
            <br></br>
            <Button size="huge" color='grey'>Join</Button>
          </Segment>
        </Grid.Column>

        <Grid.Column>
            </Grid.Column>

      </Grid>


  </div>
    );
  }
}

export default LandingWelcome;
