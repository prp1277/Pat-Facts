import React from 'react';
import { siteMetadata } from '../../gatsby-config'
import LinkGroup from './SocialMedia';

class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">

          <nav className="col-12">
            <div className="navbar-text text-white">
              <h4 className="navbar-header">Connect on social media</h4>
            </div>

            <div id="icons" className="row justify-content-center">
              <LinkGroup />
              {/** <a className="nav-link" href="/">
                <img src="https://img.icons8.com/metro/36/e7e6e6/home.png" width="36px" className="img-fluid text-light" alt="home" />
              </a>
              <a className="nav-link" href={siteMetadata.contact.SocialMedia.facebook.address}>
                <img src="https://img.icons8.com/metro/50/e7e6e6/facebook.png" width="36px" className="mx-1" alt="facebook" />
              </a>
              <a className="nav-link" href={siteMetadata.contact.SocialMedia.instagram.address}>
                <img src="https://img.icons8.com/metro/50/e7e6e6/instagram.png" width="36px" className="mx-1" alt="instagram" />
              </a> */}
            </div>

          </nav>

        </div>
        {/* </div> */}
      </nav>
    );
  }
}

export default Footer;
