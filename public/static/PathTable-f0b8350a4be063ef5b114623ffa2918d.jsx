import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export default () => (
  <StaticQuery
    query={graphql`
    query MasterData {
      allFile(sort: {fields:[relativeDirectory]}) {
        edges {
        node {
          name
          sourceInstanceName
          relativeDirectory
          relativePath
          publicURL
      }
    }
  }
}`}
    render={(data) => (
      <div id="PathTable" className="container">
        {data.allFile.edges.map(({ node }, index) => (
          <div>
            <a href={node.publicURL}>
              <img src={node.publicURL} alt={node.name} />
            </a>
          </div>
        ))}
      </div>
    )}
  />
);

export { PathTable };
