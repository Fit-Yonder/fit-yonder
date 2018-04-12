import React from 'react';
import { Grid, Container, Button, Image } from 'semantic-ui-react';

class ProfileGroups extends React.Component {
  render() {
    const ProfileGroupsStyle = {
      paddingTop: '0em',
      color: 'white',


    };
    return (
        <div className='blue-background' style={ProfileGroupsStyle}>

          <Container textAlign='center'>
            <h1>Groups</h1>
          </Container>

        </div>
    );
  }
}

export default ProfileGroups;
