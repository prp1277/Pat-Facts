import React from "react";
import { graphql } from "gatsby";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageLinks from "../data/PageLinks";

export default ({ data }) => {
  console.log(data);
  return (
    <div id="root">

      <Navbar />

      <PageLinks />

      <article id="Page" className="container bg-secondary">
        <h1 className="text-white">Image Reference</h1>
        <h3 className="text-white">Note: Sizes are in W <b>|</b> H format</h3>

        <section id="main" className="container-fluid">

          {/* <h1 className="bg-danger text-white">Original Image</h1> */}
          {/* <h1 className="bg-danger text-white">Fluid Src</h1> */}

          <section className="col">
            {data.allImageSharp.edges.map(({ node }, index) => (
              <div key={node.id}>
                {/* <img src={node.original.src} alt={node.name} /> */}
                <img src={node.fluid.srcWebp} alt={node.name} className="img-fluid my-1" />
              </div>
            ))}
          </section>

        </section>

      </article>

      <Footer />
    </div>
  );
};

export const query = graphql`
  query MyImagesQuery {
    allImageSharp {
      edges {
        node {
          id
          original {
            src
          }
          fluid {
            srcWebp
          }
        }
      }
    }
  }
`;
