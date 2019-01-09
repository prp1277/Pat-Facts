import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

class Paginate extends React.Component {
  render() {
    console.log(data);
    return (
      <div className="pagination">
        <ActivePage />
      </div>
    );
  }
}

const ActivePage = ({ data }) => (
  <StaticQuery query={graphql`
  query Paginate {
  allSitePage {
    edges {
      node {
        id
        path
      }
      next {
        path
      }
      previous {
        path
      }
    }
  }
}
  `} render={(data) => {
      <nav className="nav-item">
        {data.allSitePage.edges.map(({ node }, index) => {
          <div key={node.id}>
            <a className="nav-link" href={data.node.next.path}>Next</a>
            <a className="nav-link" href={data.node.previous.path}>Previous</a>
          </div>
        })}
      </nav>
    }}
  />
);

export { Paginate, ActivePage };
