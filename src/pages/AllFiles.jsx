import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const AllFiles = () => (
  <StaticQuery
    query={graphql`
    query{
  allFile{
    edges{
      node{
        id
        name
        changeTime
        publicURL
        childImageSharp{
          fluid{
            originalName
            srcWebp
          }
        }
        childMarkdownRemark{
          frontmatter{
            title
          }
          fields{
            slug
          }
        }
      }
    }
  }
}
  `} render={(data) => (
      <div className="container-fluid">
        {data.allFile.edges.map(({ node }, index) => (
          <div key={index} id={node.id} className="btn-group my-1 mx-1">
            <a className="btn btn-danger btn-sm" href={node.name}>{node.name}</a>
          </div>
        ))}
      </div>
    )}
  />
);

export default AllFiles;
