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
);/**
        <div className="col-12">

          <table className="table table-dark table-bordered">
            <thead className="bg-danger text-white">
              <th>Index</th>
              <th>/ Src Instance / Relative Path .Ext</th>
              <th>Static URL</th>
            </thead>

            <tbody>
              {data.allFile.edges.map(({ node }, index) => (
                <tr key={index}>

                  <td id="index">
                    index}
                  </td>

                  <td id="relative-path">
                    /{node.sourceInstanceName}/node.relativePath}
                  </td>

                  <td id="public-url">
                    <a href={node.publicURL}>{node.publicURL}</a>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    )}
  />
);
 */

export { PathTable };
