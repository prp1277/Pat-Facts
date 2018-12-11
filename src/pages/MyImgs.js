import React from "react";
import { graphql } from "gatsby";
import "./index.css";
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

        <section id="main" className="container-fluid m-1">

          <table id="image-index" className="table table-sm table-bordered table-hover table-secondary">

            <thead>
              <th className="bg-danger text-white">https://daveswoodworking.netlify.com/</th>
              <th className="bg-danger text-white">Fluid Src</th>
            </thead>

            <tbody>
              {data.allImageSharp.edges.map(({ node }, index) => (
                <tr key={node.id}>
                  <td> {node.original.src} </td>
                  <td> {node.fluid.srcWebp} </td>
                </tr>
              ))}
            </tbody>

          </table>

        </section>

        <Footer />

      </article>
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
