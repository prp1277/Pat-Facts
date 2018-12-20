import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '../templates/PrismTheme.css';
import { siteMetadata } from '../../gatsby-config';
import Navbar from "../components/Navbar";
import PageLinks from "../data/PageLinks";
import Footer from "../components/Footer";
import { CardGroup } from "../components/Card";
import Introduction from '../components/Introduction';
import Helmet from 'react-helmet';

class App extends React.Component {
  render() {
    return (
      <div className="App" id="root">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes"></meta>
          <title>{siteMetadata.title}</title>
          <meta name="author" content={siteMetadata.contact.name} />
          <meta property="og:description" content={siteMetadata.description} />
          <meta property="og:image" content="favicon.svg" />
          <meta property="og:title" content={siteMetadata.title} />
        </Helmet>
        <Navbar />
        <PageLinks />

        <article id="Page" className="container p-3">
          {/** */}
          <section className="row flex justify-content-center mx-1" >

            <div id="HolidayGreeting" className="container mb-4 shadow-lg">
              <h1 className="card-header text-white">Happy Holidays!</h1>
            </div>

            <Introduction />

          </section>

          <CardGroup />

        </article> {/** */}

        <Footer />

      </div>
    );
  }
}

export default App;
