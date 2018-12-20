import React from "react";
import { graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '../templates/PrismTheme.css';

export default ({ data }) => {
  console.log(data);
  return (
    <article id="root">
      <article id="Page" className="container col-10 bg-secondary">

        <h1 className="Page-Title">File References</h1>

        <h2>All Files Query</h2>
        <div className="container">
          <table className="table table-sm table-light text-center" id="MarkdownTable">
            <thead>
              <tr className="bg-danger text-center text-white">
                <th>Source/Path</th>
                <th>Static URL</th>
              </tr>
            </thead>

            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td>
                    /{node.sourceInstanceName}/{node.relativePath}
                  </td>

                  <td><a href={node.publicURL}>{node.publicURL}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />

        <h2>All Image Sharp Query</h2>

        <div className="container">
          <table className="table table-sm table-light text-center" id="ImagesTable">
            <thead>
              <tr className="bg-danger text-center text-white">
                <th>img src=".."</th>
                <th>Sizes</th>
              </tr>
            </thead>
            <tbody className="Image-Details">
              {data.allImageSharp.edges.map(({ node }, index) => (
                <tr key={index}>
                  <td><a href={node.original.src}>{node.original.src}</a></td>
                  <td>{node.sizes.sizes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </article>
  );
};

export const query = graphql`
  query PathQuery {
    allFile {
      edges {
        node {
          sourceInstanceName
          relativePath
          publicURL
        }
      }
    }
    allImageSharp {
      edges {
        node {
          original {
            src
          }
          sizes {
            originalName
            sizes
            aspectRatio
          }
        }
      }
    }
  }
`;
