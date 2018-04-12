import React from 'react';
import { Grid, Container } from 'semantic-ui-react';

class LandingDescription extends React.Component {
  render() {
    return (
        <div className="blue-background">
        <Grid columns={3}>
          <Grid.Row>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <Container textAlign='center' className="">
                  <p>Fit Yonder is an application providing a platform for students and health and fitness professionals that allows them to post ideas for flexible and personalized fitness routines, things such as yoga etc. that can be done in one’s dorm room, or somewhere on campus.</p>
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
