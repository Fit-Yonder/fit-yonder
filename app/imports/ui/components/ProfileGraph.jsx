import React from 'react';
import { Grid, Container, Button, Image } from 'semantic-ui-react';

class LandingWelcome extends React.Component {
  render() {
    const ProfileGraph = {
      paddingTop: '0em',


    };
    return (
        <div className='blue-background'>

<Container>
  <Image src={'http://resources.renishaw.com/download.aspx?lang=en&data=75769&btn=1'}/>
</Container>

        </div>
    );
  }
}

export default LandingWelcome;
