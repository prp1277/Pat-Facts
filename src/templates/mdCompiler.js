import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { graphql } from "gatsby";
import { siteMetadata } from '../../gatsby-config';
import "../pages/index.css";
import Helmet from 'react-helmet';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLinks from "../data/PageLinks";
import Media from "../components/Media";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div id="root">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>{ siteMetadata.title }</title>
        <meta name="author" content={ siteMetadata.contact.name } />
        <meta property="og:description" content={ siteMetadata.description } />
        <meta property="og:image" content="favicon.svg" />
        <meta property="og:title" content={ siteMetadata.title } />
      </Helmet>

      <Navbar />

      <PageLinks />

      {/** This template uses two containers to create a multi-tiered layout. Page is a regular container, but Main is a container-fluid, meaning Main will use as much space as needed */ }
      <article id="Page" className="container col-10 bg-secondary border-dark">
        <h1 className="text-white text-center">{ post.frontmatter.title } <small> { post.frontmatter.date }</small></h1>

        <div id="main" className="container-fluid bg-light shadow-lg"
          dangerouslySetInnerHTML={ { __html: post.html } } />

        <Media />
      </article>

      <Footer />

    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`;
