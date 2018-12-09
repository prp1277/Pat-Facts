import React from "react";
import { StaticQuery, graphql } from "gatsby";

/**
 * Statefull Functional Component
 */

const CarouselImgs = (data) => {
  console.log(data);
  return (
    <StaticQuery query={graphql`
      query{
        site {
          siteMetadata {
            siteURL
            title
          }
        }
      allImageSharp{
        edges{
          node{
            original{
              src
            }
            fluid{
              srcWebp
              originalName
            }
          }
        }
      }
    }
      `}
      render={(data) => (

        <div className="CarouselImgs">
          {data.allImageSharp.edges.map(({ node }, index) => (
            <img className="img-fluid" src={node.original.src} alt={node.fluid.originalName} key={index} />
          ))}
        </div>
      )}
    />
  );
}

export default CarouselImgs;
