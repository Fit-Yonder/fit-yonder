import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

class LandingDescription extends React.Component {
  render() {
    const landingDescriptionText = {
      color: 'white'
    };
    return (
        <div className="blue-background" style={landingDescriptionText}>
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
                <Container textAlign='center' className="">
                  <br></br><br></br><br></br>
                  <h3>Fit Yonder is an application providing a platform for students and health and fitness professionals
                    that allows them to post ideas for flexible and personalized fitness routines, things such as yoga
                    etc. that can be done in one’s dorm room, or somewhere on campus.</h3>
                  <br></br><br></br><br></br>
                </Container>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default LandingDescription;
