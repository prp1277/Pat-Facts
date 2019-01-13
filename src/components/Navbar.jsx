import React from "react";
import { siteMetadata } from '../../gatsby-config'

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

        </div>

      </div>
    );
  }
}

export default Navbar;
