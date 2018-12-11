import React from 'react';
import { siteMetadata } from '../../gatsby-config'
import LinkGroup from './SocialMedia';

class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">

        <div className="container-fluid justify-content-center">

          <div className="col navbar-text text-white">
            <h4 className="navbar-header">Connect on social media</h4>
          </div>

          <div id="icons" className="row flex-col justify-content-center">
            <LinkGroup />
          </div>

        </div>

      </nav>
    );
  }
}

export default Footer;
