import React from 'react';
import LinkGroup from './SocialMedia';

class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">

        <div className="container-fluid text-center">

          <div className="col navbar-nav">
            <a className="nav-item text-primary" href="/">Home</a>
            <a className="nav-item text-primary" href="/docs">Blog</a>
            <a className="nav-item text-primary" href="/About">About</a>
          </div>

          <div id="icons" className="col flex-row">
            <h4 className="navbar-header text-white">Connect on social media</h4>
            <LinkGroup />
          </div>

        </div>

      </nav>
    );
  }
}

export default Footer;
