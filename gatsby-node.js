const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    // if it's been MarkdownRemarked, create the page
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then((result) => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/mdCompiler.js`),
            context: {
              slug: node.fields.slug,
            },
          });
        });
        resolve();
      });
  });
};

//const fileNode = getNode(node.parent);
//console.log(`\n`, fileNode.relativePath);
//console.log(createFilePath({ node, getNode, basePath: `pages` }));
/**
 * Pre mdCompiler.js
 * `).then((result) => {
 * console.log(JSON.stringify(result, null, 4));
 * resolve();
 * */
