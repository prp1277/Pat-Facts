import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const AllFiles = () => (
  <StaticQuery
    query={graphql`
    query AllFiles {
      allFile {
        edges {
          node {
            name
            relativePath
            publicURL
        }
      }
    }
  }
  `} render={(data) => (
      <div className="container">
        {data.allFile.edges.map(({ node }, index) => (
          <div key={index} id={node.relativePath} className="my-1 mx-1">
            <a className="btn btn-danger btn-sm" href={node.publicURL}>{node.name}</a>
          </div>
        ))}
      </div>
    )}
  />
);

export default AllFiles;
