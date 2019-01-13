import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '../templates/PrismTheme.css';
import { siteMetadata } from '../../gatsby-config';
import Helmet from 'react-helmet';
import Navbar from "../components/Navbar";
import PageLinks from "../data/PageLinks";
import Footer from "../components/Footer";
import { CardGroup } from "../components/Card";
import Introduction from '../components/Introduction';
import Media from '../components/Media';

class App extends React.Component {
  render() {
    return (
      <div className="App" id="root">

        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          <title>{siteMetadata.title}</title>
          <meta name="author" content={siteMetadata.contact.name} />
          <meta property="og:description" content={siteMetadata.description} />
          <meta property="og:image" content="favicon.svg" />
          <meta property="og:title" content={siteMetadata.title} />
        </Helmet>

        <Navbar />

        <PageLinks />

        <article id="Page" className="container px-5">

          <section className="row flex justify-content-center mx-1">
            {/* 
            Add this section back for an intro-container
            <div className="container mb-4 shadow-lg">
              <h1 className="card-header text-white">Happy Holidays!</h1>
            </div> 
            */}

            <Introduction />

          </section>

          <CardGroup />

        </article>

        <Footer />

      </div>
    );
  }
}

export default App;
