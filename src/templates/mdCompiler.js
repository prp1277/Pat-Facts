import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'prismjs/themes/prism-coy.css';
import { graphql } from "gatsby";
import "../pages/index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLinks from "../data/PageLinks";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div id="root">
      <Navbar />
      <PageLinks />

      <section id="Page" className="container bg-secondary px-2">
        <h1 className="text-white">{post.frontmatter.title}</h1>
        <h3 className="text-white">{post.frontmatter.date}</h3>
        <div id="main" className="bg-light"
          dangerouslySetInnerHTML={{ __html: post.html }} />
      </section>
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
