import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export const AllImages = () => (
  <StaticQuery query={graphql`
  query AllImages {
  allImageSharp {
    edges {
      node {
        id
        fluid{
          src
        }
      }
    }
  }
}`}
    render={(data) => (
      <div id="AllImages" className="container">
        {data.allImageSharp.edges.map(({ node }, index) => (
          <img className="img-fluid" key={node.id} src={node.fluid.src} id={node.id} alt="" />
        ))}
      </div>
    )}
  />
);
