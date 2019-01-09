import React from "react";
import { graphql } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '../templates/PrismTheme.css';

export default ({ data }) => {
  // console.log(data);
  return (
    <article id="root">
      <article id="Page" className="container col-10 bg-secondary">

        <h1 className="Page-Title">File References</h1>

        <h2>All Files Query</h2>
        <div className="container">
          <div className="bg-danger text-center text-white">
            <h1>Source/Path</h1>
            <h1>Static URL</h1>
          </div>

          {data.allFile.edges.map(({ node }, index) => (
            <div key={node.id} id={node.id} className="btn-group">
              <a className="btn btn-link" href={node.publicURL}>{node.name}</a>
            </div>
          ))}

        </div>
        <br />

        <h2>All Image Sharp Query</h2>

        <div className="container">
          {data.allImageSharp.edges.map(({ node }, index) => (
            <div key={node.id}>
              <img className="img-fluid" src={node.fluid.src} alt={node.name} />
            </div>
          ))}
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
          id
          name
          sourceInstanceName
          relativePath
          publicURL
        }
      }
    }
    allImageSharp {
      edges {
        node {
          id
          fluid {
            src
          }
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
