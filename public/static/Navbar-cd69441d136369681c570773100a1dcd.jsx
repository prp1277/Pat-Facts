import React from "react";
import { siteMetadata } from '../../gatsby-config'
import LinkGroup from './SocialMedia';

/**
 * Class Component
 * <SiteTitle /><HomeButton />
 */
class Navbar extends React.Component {
  render() {
    const SM = siteMetadata.contact.SocialMedia;
    return (
      <div className="navbar navbar-dark bg-success">
        <div className="container-fluid">

          <h1 className="col">
            <a href="/" className="text-white" alt={siteMetadata.title}>
              {siteMetadata.title}
            </a>
          </h1>

          {/**<div id="icons" className="row flex-col text-center">
            
            <LinkGroup />

          </div> */}

        </div>

      </div>
    );
  }
}

export default Navbar;
