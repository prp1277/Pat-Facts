import React from "react";
import { graphql } from "gatsby";
import "./index.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default ({ data }) => {
  console.log(data);
  return (
    <div className="App" id="root">

      <Navbar />

      <section id="main" className="container">

        <section id="page-header" className="col-12 text-center">
          <h1 id="Page-Title">Image Reference</h1>
          <h3 id="Page-Subtitle">Note: Sizes are in W <b>|</b> H format</h3>
        </section>

        <section className="container flex-column">
          <table id="image-index" className="table table-bordered table-hover table-secondary">

            <thead>
              <th className="bg-danger text-white">https://daveswoodworking.netlify.com/</th>
              <th className="bg-danger text-white">Fluid Src</th>
              <th className="bg-danger text-white">Presentation Size</th>
              <th className="bg-danger text-white">Original Size</th>
              <th className="bg-danger text-white">Fixed Size</th>
            </thead>

            <tbody>
              {data.allImageSharp.edges.map(({ node }, index) => (
                <tr key={node.id}>
                  <td> <b>{node.original.src}</b> </td>
                  <td> <b>{node.fluid.src}</b> </td>
                  <td> {node.fluid.presentationWidth} px <b>|</b> {node.fluid.presentationHeight} px </td>
                  <td> {node.original.width} px <b>|</b> {node.original.height} px </td>
                  <td> {node.fixed.width} px <b>|</b> {node.fixed.height} px </td>
                </tr>
              ))}
            </tbody>

          </table>

        </section>

      </section>

      <Footer />

    </div>
  );
};

export const query = graphql`
  query MyFilesQuery {
    allImageSharp {
      edges {
        node {
          id
          original {
            src
            width
            height
          }
          fluid {
            src
            presentationWidth
            presentationHeight
          }
          fixed {
            src
            width
            height
          }
        }
      }
    }
  }
`;
