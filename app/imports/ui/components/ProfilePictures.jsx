import React from 'react';
import { Grid, Container, Button, Image } from 'semantic-ui-react';

class LandingWelcome extends React.Component {
  render() {
    const ProfilePicturesCoverSpace = {
      paddingTop: '10px',


    };
    return (
        <div className='profile-cover-mockup' style={ProfilePicturesCoverSpace}>


          <Grid centered columns={8} className="">
            <Grid.Row>

              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
                <Image src="https://www.tenforums.com/geek/gars/images/2/types/thumb__ser.png" size='small' rounded/>
              </Grid.Column>
              <Grid.Column>
            </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
              <Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>


        </div>
    );
  }
}

export default LandingWelcome;
