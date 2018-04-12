import React from 'react';
import { Grid, Container, Button } from 'semantic-ui-react';

class LandingWelcome extends React.Component {
  render() {
    const landingWelcomeText = {
      paddingTop: '15em'
    };
    const landingDescriptionText = {
      color: 'white'
    };
    return (
        <div className='landing-background'>


          <Container textAlign='center' style={landingWelcomeText}>

            <h1>Welcome to a new way to exercise</h1>
            <br></br><br></br>
            <Button size="huge" color='grey'>Join</Button>
            <br/>
            <br/>
            <br/>
            <Grid centered columns={3}>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid>
          </Container>
         


        </div>
    );
  }
}

export default LandingWelcome;
