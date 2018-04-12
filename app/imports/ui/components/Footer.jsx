import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = { paddingTop: '0px', color: 'white' };
    return (
        <footer className="blue-background">
          <div style={divStyle} className="ui center aligned container">
            COPYRIGHT © 2018 FITYONDER
          </div>
        </footer>
    );
  }
}

export default Footer;
