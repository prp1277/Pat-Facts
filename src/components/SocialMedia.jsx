import React from 'react';
import { siteMetadata } from '../../gatsby-config';

class LinkGroup extends React.Component {
  render() {
    const SM = siteMetadata.contact.SocialMedia;
    return (
      <div id="icons" className="row nav-item text-center">
        <a className="nav-link" href={SM.github.address}>
          <img src={SM.github.logo} width="36px" className="mx-1" alt="github" /></a>

        <a className="nav-link" href={SM.linkedin.address}>
          <img src={SM.linkedin.logo} width="36px" className="mx-1" alt="linkedin" /></a>

        <a className="nav-link" href={SM.email.address}>
          <img src={SM.email.logo} width="36px" className="mx-1" alt="email" /></a>

        <a className="nav-link" href={SM.facebook.address}>
          <img src={SM.facebook.logo} width="36px" className="mx-1" alt="facebook" /></a>

        <a className="nav-link" href={SM.instagram.address}>
          <img src={SM.instagram.logo} width="36px" className="mx-1" alt="instagram" /></a>

        <a className="nav-link" href={SM.twitter.address}>
          <img src={SM.twitter.logo} width="36px" className="mx-1" alt="twitter" /></a>
      </div>
    );
  }
};

export default LinkGroup;
