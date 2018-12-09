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

          <h1>
            <a href="/" className="text-white" alt={siteMetadata.title}>{siteMetadata.title}</a>
          </h1>

          <div id="icons" className="row text-center">
            <LinkGroup />
            { /** 
            <a className="nav-link" href={SM.github.address}>
              <img src=SM.github.logo} width="36px" className="mx-1" alt="github" /></a>

            <a className="nav-link" href={SM.linkedin.address}>
              <img src=SM.linkedin.logo} width="36px" className="mx-1" alt="linkedin" /></a>

            <a className="nav-link" href={SM.email.address}>
              <img src=SM.email.logo} width="36px" className="mx-1" alt="email" /></a>

            <a className="nav-link" href={SM.facebook.address}>
              <img src=SM.facebook.logo} width="36px" className="mx-1" alt="facebook" /></a>

            <a className="nav-link" href={SM.instagram.address}>
              <img src=SM.instagram.logo} width="36px" className="mx-1" alt="instagram" /></a>

            <a className="nav-link" href={SM.twitter.address}>
              <img src=SM.twitter.logo} width="36px" className="mx-1" alt="twitter" /></a>
*/}
          </div>

        </div>

      </div>
    );
  }
}

export default Navbar;
