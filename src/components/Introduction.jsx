import React from 'react';
import { siteMetadata } from '../../gatsby-config';
import Media from './Media';

class Introduction extends React.Component {
  render() {
    return (
      <div id="Landing" className="container bg-secondary text-light my-1 p-2">

        <section id="greeting" className="col flex-row text-center">
          <h1>Welcome to {siteMetadata.title}</h1>
          <h5>{siteMetadata.description}</h5>
        </section>

        <section id="introduction" className="col flex-row py-2 justify-content-center">
          <Media />
        </section>

        <section id="attribution" className="col flex-row">
          Documentation can be found on <a href={siteMetadata.homePage} alt="github">Github</a>. If you notice problems with a page, please send an email to <a href={siteMetadata.contact.email} alt="prp1277@gmail.com">prp1277@gmail.com</a> or create a new issue on GitHub.
        </section>
      </div>
    );
  }
}

export default Introduction;
