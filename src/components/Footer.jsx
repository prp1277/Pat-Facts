import React from 'react';
import LinkGroup from './SocialMedia';

class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">

        <div className="container-fluid justify-content-center">

          <div className="col flex-row navbar-text text-white">
            <h4 className="navbar-header">Connect on social media</h4>
          </div>

          <div id="icons" className="row flex-col">
            <LinkGroup />
          </div>

        </div>

      </nav>
    );
  }
}

export default Footer;
