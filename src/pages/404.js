import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Helmet from 'react-helmet';
import { siteMetadata } from '../../gatsby-config';
import Navbar from "../components/Navbar";
import PageLinks from "../data/PageLinks";
import Footer from "../components/Footer";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div id="root">
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

          <section className="container-fluid bg-light justify-content-center mx-1 py-2" >
            <h1>Uh Oh</h1>
            <img className="img-fluid" src="/static/404-1e6e1c9faff405d21dd6c62700630536.gif" alt="404"></img>
            <h3>It doesn't look like that page exists.</h3>
            <h3> Try one of the links above</h3>
          </section>

        </article>
        <Footer />
      </div>
    );
  }
};

export default NotFoundPage;
