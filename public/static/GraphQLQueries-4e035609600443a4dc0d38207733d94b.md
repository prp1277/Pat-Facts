---
title: "Queries"
date: "2018-12-20"
---

To avoid redundant queries that slow down the site paste GraphQL queries here.

# MdCompiler

`src/templates/mdCompiler.js`

```graphql
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
```
# my-files

`src/pages/my-files.jsx`

```graphql
query PathQuery {
    allFile {
      edges {
        node {
          sourceInstanceName
          relativePath
          publicURL
        }
      }
    }
    allImageSharp {
      edges {
        node {
          original {
            src
          }
          sizes {
            originalName
            sizes
            aspectRatio
          }
        }
      }
    }
  }
```
# MyImgs

`src/pages/MyImgs.js`

```graphql
query MyImagesQuery {
    allImageSharp {
      edges {
        node {
          id
          original {
            src
          }
          fluid {
            srcWebp
          }
        }
      }
    }
  }
```

# AllFiles Query

`src/data/AllFiles.jsx`

```graphql
query AllFiles {
      allFile {
        edges {
          node {
            name
            relativePath
            publicURL
        }
      }
    }
  }
```

# Page Links

`src/data/PageLinks.jsx`

```graphql
query {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
```

# PathTable

`src/data/PathTable.jsx`

```graphql
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
}
```

# Paginate
`src/components/paginate.jsx`

```graphql
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
```
