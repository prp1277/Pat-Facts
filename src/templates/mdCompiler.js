import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './PrismTheme.css';
import { graphql } from "gatsby";
import { siteMetadata } from '../../gatsby-config';
import "../pages/index.css";
import Helmet from 'react-helmet';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLinks from "../data/PageLinks";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div id="root">
      <Helmet>
        <title>{siteMetadata.title}</title>
        <meta title="description" content={siteMetadata.description} />
      </Helmet>
      {/** id=root */}
      <Navbar />

      <PageLinks />

      <article id="Page" className="container col-10 bg-secondary">
        {/** This template uses two containers to create a multi-tiered layout. Page is a regular container, but Main is a container-fluid, meaning Main will use as much space as needed */}
        <h1 className="text-white align-items-center">{post.frontmatter.title} | <small> {post.frontmatter.date}</small></h1>

        <div id="main" className="container-fluid bg-light"
          dangerouslySetInnerHTML={{ __html: post.html }} />

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
