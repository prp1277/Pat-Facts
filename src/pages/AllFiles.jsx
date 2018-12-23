import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const AllFiles = () => (
  <StaticQuery
    query={graphql`
  allFile {
    edges {
      node {
        id
        changeTime(fromNow: true)
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
          srcWebp
        }
      }
    }
  }
  allMarkdownRemark{
    edges{
      node{
        id
        timeToRead
        headings{
          value
        }
        html
        fields{
          slug
        }
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
