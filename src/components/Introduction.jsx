import React from 'react';
import { siteMetadata } from '../../gatsby-config';

class Introduction extends React.Component {
  render() {
    return (
      <div id="Landing" className="container bg-secondary text-light my-1 p-2">

        <section id="greeting" className="col flex-row">
          <h1><b>Welcome to {siteMetadata.title}</b></h1>
          <h5><b>Follow the links above to see samples of {siteMetadata.contact.name}'s work</b></h5>
        </section>

        <section id="introduction" className="row py-2 justify-content-center">
          <a href="/static/Dubya-0045112e369c61baa8813fded93c5e4f.jpg.">
            <img className="mx-2" src="./static/Dubya-0045112e369c61baa8813fded93c5e4f.jpg" width="301" height="301" alt="dubya" />
          </a>
          <a href="./static/LinkedIn-dfbd71c0fae03cd7d16ce2433df200e9.jpg">
            <img className="mx-2" src="./static/LinkedIn-dfbd71c0fae03cd7d16ce2433df200e9.jpg" width="301" height="301" alt="profile" />
          </a>
        </section>

        <section id="attribution" className="col flex-row">
          Information about this site can be found on <a href={siteMetadata.homePage} alt="github">Github</a>. If you notice problems with a page, please send an email to <a href={siteMetadata.contact.email} alt="prp1277@gmail.com">prp1277@gmail.com</a> or create a new issue on GitHub.
        </section>
      </div>
    );
  }
}

export default Introduction;
