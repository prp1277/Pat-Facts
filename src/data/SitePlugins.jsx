import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const SitePlugins = () => (
  <StaticQuery query={graphql`
  query {
  allSitePlugin {
    edges {
      node {
        name
        nodeAPIs
        resolve
        pluginOptions {
          resolve
        }
      }
    }
  }
}
  `} render={(data) => (
      <div className="container">

      </div>
    )}
  />
);

export default SitePlugins;
