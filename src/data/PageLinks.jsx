import React from "react";
import { StaticQuery, graphql } from "gatsby";
/**
 * This is the navigation for all markdown pages
 */
const PageLinks = () => (
  <StaticQuery query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
                tags
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `} render={(data) => (

      <div id="site-nav" className="nav nav-item justify-content-center">
        <div className="nav-item btn-group">
          <a href="/docs" className="nav-link btn-sm btn-danger mx-2 my-1">Blog Posts</a>
          <a href="/docs/pages/Checklist" className="nav-link btn-sm btn-danger mx-2 my-1">To Do List</a>
        </div>

        {/**        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <div className="nav-item" id={node.id} key={node.frontmatter.title}>
            <a
              className="nav-link btn-sm btn-danger mx-2 my-1"
              key={index}
              href={node.fields.slug}>
              {node.frontmatter.title}</a>
          </div>
        ))} */}
      </div>
    )}
  />
);

export default PageLinks;
