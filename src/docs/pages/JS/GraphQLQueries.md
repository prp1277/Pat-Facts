---
title: "Queries"
date: "2018-12-20"
---

# Create Task-Specific Components

Running a lot of GraphQL queries will slow your deployment / site down. I found myself falling into using the same queries for multiple components and dressing them differently instead of creating presentational components to that fit my specific needs. To avoid redundant queries I like to paste them here and explain - in detail - what their purpose is.

# `src/templates/mdCompiler.js`

This is the template query for creating new pages using markdownRemark.html, title and date

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

# `src/pages/my-files.jsx`

This query is mostly for reference, as it currently displays links to raw .jsx *(but also full-view pages)* via `{ node.publicURL }`.

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

# `src/data/PageLinks.jsx`

This provides links to all the site's markdown pages 

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

# `src/templates/mdCompiler.js`

This query is the backbone of any Gatsby site. It controls the `createPages` API for compiling .md files into html.

```graphql
query {
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
```

# Site Plugins

Show the site's plugins, their options and resolvers.

```graphql
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
```

## My Files Output

```json
{
  "data": {
    "allFile": {
      "edges": [
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "favicon.svg",
            "publicURL": "/static/favicon-f42ec13f96c6a591202bee2c4c0afeb1.svg"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "data/PageLinks.jsx",
            "publicURL": "/static/PageLinks-f290e12ea2a4dd877e72f8be1fbb3512.jsx"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "components/Card.jsx",
            "publicURL": "/static/Card-c22cc6b3b5a1de00924ab65ce8c470e0.jsx"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "components/Footer.jsx",
            "publicURL": "/static/Footer-863762411b1794256c11cb02ba6d27db.jsx"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "components/Introduction.jsx",
            "publicURL": "/static/Introduction-e46ca1ae59d7021645e6a72cd6eabe2e.jsx"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "components/Media.jsx",
            "publicURL": "/static/Media-687f6dd39ea46a38b957dc37db633c68.jsx"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "components/Navbar.jsx",
            "publicURL": "/static/Navbar-a64e9e41426e40ef2500257e4b7721d2.jsx"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "components/SocialMedia.jsx",
            "publicURL": "/static/SocialMedia-c14064ac611b6b7935ce85124827b2e4.jsx"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/index.md",
            "publicURL": "/static/index-75d1fa887ea7b5082d29f8d802ca9c4f.md"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "pages/404.jsx",
            "publicURL": "/static/404-816ffdd8e2d5aface524796ce54494cc.jsx"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "pages/About.jsx",
            "publicURL": "/static/About-8f51fc9b1622d32cf55574f18779f9a8.jsx"
          }
        },
        {
          "node": {
            "sourceInstanceName": "pages",
            "relativePath": "index.css",
            "publicURL": "/static/index-e9ecfa47995cd4f3264c2f7c3696d3a4.css"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "pages/index.js",
            "publicURL": "/static/index-815ad35dd2c7e84732ff4862aed180cc.js"
          }
        },
        {
          "node": {
            "sourceInstanceName": "pages",
            "relativePath": "my-files.jsx",
            "publicURL": "/static/my-files-3ac0a483b08ace2083f185d5a0d2b0e2.jsx"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "templates/PrismTheme.css",
            "publicURL": "/static/PrismTheme-5f67413c586e26f9b7f2156b726e85c0.css"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "templates/mdCompiler.js",
            "publicURL": "/static/mdCompiler-b5eb78a6ce7565a73303f841ea2e9654.js"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/pages/Checklist.md",
            "publicURL": "/static/Checklist-83fb1cce6f7af88b264811706554bf40.md"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/pages/FavoriteMacros.md",
            "publicURL": "/static/FavoriteMacros-d1884ac4994e74c9bcfa227daf587a7a.md"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/pages/FinanceWidgets.md",
            "publicURL": "/static/FinanceWidgets-e2a04c186a9814fa9da45506dc488e89.md"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/pages/Gatsby-Advanced.md",
            "publicURL": "/static/Gatsby-Advanced-127ce2bab2cd092aabbb12f142d546f3.md"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/pages/Get&Transform.md",
            "publicURL": "/static/Get&Transform-3ea65b16bf6ffed75c28bc72541148f6.md"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/pages/GraphQLQueries.md",
            "publicURL": "/static/GraphQLQueries-a6b949e824d66e1f6a2af66debbc1d7a.md"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/pages/LearnProgramming.md",
            "publicURL": "/static/LearnProgramming-477954c9444843353980ee12edc70573.md"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/pages/LyndaGQL.md",
            "publicURL": "/static/LyndaGQL-624a3548a3765e96d493aa7605df3bb3.md"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/pages/NotADeveloper.md",
            "publicURL": "/static/NotADeveloper-b0ac6859ae7c1b463b91fcb550470b5c.md"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/pages/resume.md",
            "publicURL": "/static/resume-e6a70f69193b367ded581aca25e75524.md"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/Blog-Post.png",
            "publicURL": "/static/Blog-Post-bcbe3aef83b4f450df4c97f266bdb308.png"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/CatastrophicFail.jpg",
            "publicURL": "/static/CatastrophicFail-caa0c6fcf631a8e8ae30a47a7a71c0e0.jpg"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/Dubya.jpg",
            "publicURL": "/static/Dubya-0045112e369c61baa8813fded93c5e4f.jpg"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/LinkedIn.jpg",
            "publicURL": "/static/LinkedIn-dfbd71c0fae03cd7d16ce2433df200e9.jpg"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/StudyGuidesTweet.JPG",
            "publicURL": "/static/StudyGuidesTweet-6993928d663e0e6cc67857c0cf1768ba.JPG"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/WeddingSiblings.jpg",
            "publicURL": "/static/WeddingSiblings-1909d923ae1d1a7119c63d5c78c1d794.jpg"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/partner-in-crime.jpg",
            "publicURL": "/static/partner-in-crime-d4f40924de833854691f551ac25910da.jpg"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/robert-wedding-suits.jpg",
            "publicURL": "/static/robert-wedding-suits-718d6286343770cd871b5d8325d042ec.jpg"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/cigars-and-scotch.jpg",
            "publicURL": "/static/cigars-and-scotch-2e7a5a2c230fa5dcbdc83aa314a0d03d.jpg"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/pre-boulay-wedding.jpg",
            "publicURL": "/static/pre-boulay-wedding-53b1628fef8a2ee177a2b8413409edc9.jpg"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/corn-logo.PNG",
            "publicURL": "/static/corn-logo-06bbb0653f8a43b0f24e1d1d3f37d3e8.PNG"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/404.gif",
            "publicURL": "/static/404-1e6e1c9faff405d21dd6c62700630536.gif"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/2012-12-20 16.50.42.jpg",
            "publicURL": "/static/2012-12-20 16.50.42-965a50f7803cd0ea3ebfee3b52415089.jpg"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/img/Backyard.png",
            "publicURL": "/static/Backyard-b736d2f25ace85635d790f6e8daa6edc.png"
          }
        },
        {
          "node": {
            "sourceInstanceName": "src",
            "relativePath": "docs/pages/Routing.md",
            "publicURL": "/static/Routing-70db4ab916ac551e80ec5b8bfd8d8a36.md"
          }
        }
      ]
    },
    "allImageSharp": {
      "edges": [
        {
          "node": {
            "original": {
              "src": "/static/Blog-Post-bcbe3aef83b4f450df4c97f266bdb308.png"
            },
            "sizes": {
              "originalName": "Blog-Post.png",
              "sizes": "(max-width: 800px) 100vw, 800px",
              "aspectRatio": 1.8070175438596492
            }
          }
        },
        {
          "node": {
            "original": {
              "src": "/static/CatastrophicFail-caa0c6fcf631a8e8ae30a47a7a71c0e0.jpg"
            },
            "sizes": {
              "originalName": "CatastrophicFail.jpg",
              "sizes": "(max-width: 250px) 100vw, 250px",
              "aspectRatio": 1.4970059880239521
            }
          }
        },
        {
          "node": {
            "original": {
              "src": "/static/Dubya-0045112e369c61baa8813fded93c5e4f.jpg"
            },
            "sizes": {
              "originalName": "Dubya.jpg",
              "sizes": "(max-width: 508px) 100vw, 508px",
              "aspectRatio": 0.9980353634577603
            }
          }
        },
        {
          "node": {
            "original": {
              "src": "/static/LinkedIn-dfbd71c0fae03cd7d16ce2433df200e9.jpg"
            },
            "sizes": {
              "originalName": "LinkedIn.jpg",
              "sizes": "(max-width: 301px) 100vw, 301px",
              "aspectRatio": 1
            }
          }
        },
        {
          "node": {
            "original": {
              "src": "/static/StudyGuidesTweet-6993928d663e0e6cc67857c0cf1768ba.JPG"
            },
            "sizes": {
              "originalName": "StudyGuidesTweet.JPG",
              "sizes": "(max-width: 800px) 100vw, 800px",
              "aspectRatio": 1.5476575121163167
            }
          }
        },
        {
          "node": {
            "original": {
              "src": "/static/WeddingSiblings-1909d923ae1d1a7119c63d5c78c1d794.jpg"
            },
            "sizes": {
              "originalName": "WeddingSiblings.jpg",
              "sizes": "(max-width: 800px) 100vw, 800px",
              "aspectRatio": 1.5
            }
          }
        },
        {
          "node": {
            "original": {
              "src": "/static/partner-in-crime-d4f40924de833854691f551ac25910da.jpg"
            },
            "sizes": {
              "originalName": "partner-in-crime.jpg",
              "sizes": "(max-width: 236px) 100vw, 236px",
              "aspectRatio": 0.5944584382871536
            }
          }
        },
        {
          "node": {
            "original": {
              "src": "/static/robert-wedding-suits-718d6286343770cd871b5d8325d042ec.jpg"
            },
            "sizes": {
              "originalName": "robert-wedding-suits.jpg",
              "sizes": "(max-width: 800px) 100vw, 800px",
              "aspectRatio": 1.5
            }
          }
        },
        {
          "node": {
            "original": {
              "src": "/static/cigars-and-scotch-2e7a5a2c230fa5dcbdc83aa314a0d03d.jpg"
            },
            "sizes": {
              "originalName": "cigars-and-scotch.jpg",
              "sizes": "(max-width: 800px) 100vw, 800px",
              "aspectRatio": 1.5
            }
          }
        },
        {
          "node": {
            "original": {
              "src": "/static/pre-boulay-wedding-53b1628fef8a2ee177a2b8413409edc9.jpg"
            },
            "sizes": {
              "originalName": "pre-boulay-wedding.jpg",
              "sizes": "(max-width: 800px) 100vw, 800px",
              "aspectRatio": 1.5
            }
          }
        },
        {
          "node": {
            "original": {
              "src": "/static/corn-logo-06bbb0653f8a43b0f24e1d1d3f37d3e8.PNG"
            },
            "sizes": {
              "originalName": "corn-logo.PNG",
              "sizes": "(max-width: 800px) 100vw, 800px",
              "aspectRatio": 1.6626506024096386
            }
          }
        },
        {
          "node": {
            "original": {
              "src": "/static/2012-12-20 16.50.42-965a50f7803cd0ea3ebfee3b52415089.jpg"
            },
            "sizes": {
              "originalName": "2012-12-20 16.50.42.jpg",
              "sizes": "(max-width: 800px) 100vw, 800px",
              "aspectRatio": 1.3333333333333333
            }
          }
        },
        {
          "node": {
            "original": {
              "src": "/static/Backyard-b736d2f25ace85635d790f6e8daa6edc.png"
            },
            "sizes": {
              "originalName": "Backyard.png",
              "sizes": "(max-width: 800px) 100vw, 800px",
              "aspectRatio": 0.75
            }
          }
        }
      ]
    }
  }
}
```

## mdCompiler Output

```json
{
  "data": {
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "id": "2cef5be3-542d-593a-9680-8113059c8924",
            "frontmatter": {
              "title": "To Do"
            },
            "fields": {
              "slug": "/docs/pages/Checklist/"
            }
          }
        },
        {
          "node": {
            "id": "9a2ff305-6c45-540d-92ab-1eaf5f81a0ea",
            "frontmatter": {
              "title": "Favorite Macros"
            },
            "fields": {
              "slug": "/docs/pages/FavoriteMacros/"
            }
          }
        },
        {
          "node": {
            "id": "b94df237-f4e1-5374-832d-972afcf7495d",
            "frontmatter": {
              "title": "Widgets"
            },
            "fields": {
              "slug": "/docs/pages/FinanceWidgets/"
            }
          }
        },
        {
          "node": {
            "id": "73efc28e-abee-5f62-bbfa-dbd8c644d8af",
            "frontmatter": {
              "title": "Gatsby"
            },
            "fields": {
              "slug": "/docs/pages/Gatsby-Advanced/"
            }
          }
        },
        {
          "node": {
            "id": "805f95a5-f00e-583c-a6bb-83c908c926e3",
            "frontmatter": {
              "title": "LinkedIn GQL"
            },
            "fields": {
              "slug": "/docs/pages/LyndaGQL/"
            }
          }
        },
        {
          "node": {
            "id": "9aa1787f-7537-58b5-bb7c-de069c1d095d",
            "frontmatter": {
              "title": "Learning to Code"
            },
            "fields": {
              "slug": "/docs/pages/LearnProgramming/"
            }
          }
        },
        {
          "node": {
            "id": "07a5bb16-f7f0-56df-a5e9-99572f168648",
            "frontmatter": {
              "title": "Dev.to"
            },
            "fields": {
              "slug": "/docs/pages/NotADeveloper/"
            }
          }
        },
        {
          "node": {
            "id": "cfee8786-aea8-5f11-a69d-be40b33f5b31",
            "frontmatter": {
              "title": "Resume"
            },
            "fields": {
              "slug": "/docs/pages/resume/"
            }
          }
        },
        {
          "node": {
            "id": "063f50f2-433b-5bff-ba8b-3b79ee0ae7e2",
            "frontmatter": {
              "title": "Get & Transform"
            },
            "fields": {
              "slug": "/docs/pages/Get&Transform/"
            }
          }
        },
        {
          "node": {
            "id": "92daabae-b165-56fb-868f-5f5a0a8d2642",
            "frontmatter": {
              "title": "Geocoding Locations"
            },
            "fields": {
              "slug": "/docs/pages/Routing/"
            }
          }
        },
        {
          "node": {
            "id": "0866313d-41d3-5f5a-8b93-3c0eb12ecf09",
            "frontmatter": {
              "title": "Patrick's Blog"
            },
            "fields": {
              "slug": "/docs/"
            }
          }
        },
        {
          "node": {
            "id": "3fec39a8-c174-5111-83fe-f19f178c0b45",
            "frontmatter": {
              "title": "Queries"
            },
            "fields": {
              "slug": "/docs/pages/GraphQLQueries/"
            }
          }
        }
      ]
    }
  }
}
```

## PageLinks Output

```json
{
  "data": {
    "allMarkdownRemark": {
      "edges": [
        {
          "node": {
            "fields": {
              "slug": "/docs/pages/Checklist/"
            }
          }
        },
        {
          "node": {
            "fields": {
              "slug": "/docs/pages/FavoriteMacros/"
            }
          }
        },
        {
          "node": {
            "fields": {
              "slug": "/docs/pages/FinanceWidgets/"
            }
          }
        },
        {
          "node": {
            "fields": {
              "slug": "/docs/pages/Gatsby-Advanced/"
            }
          }
        },
        {
          "node": {
            "fields": {
              "slug": "/docs/pages/LyndaGQL/"
            }
          }
        },
        {
          "node": {
            "fields": {
              "slug": "/docs/pages/LearnProgramming/"
            }
          }
        },
        {
          "node": {
            "fields": {
              "slug": "/docs/pages/NotADeveloper/"
            }
          }
        },
        {
          "node": {
            "fields": {
              "slug": "/docs/pages/resume/"
            }
          }
        },
        {
          "node": {
            "fields": {
              "slug": "/docs/pages/Get&Transform/"
            }
          }
        },
        {
          "node": {
            "fields": {
              "slug": "/docs/pages/Routing/"
            }
          }
        },
        {
          "node": {
            "fields": {
              "slug": "/docs/"
            }
          }
        },
        {
          "node": {
            "fields": {
              "slug": "/docs/pages/GraphQLQueries/"
            }
          }
        }
      ]
    }
  }
}
```

## MyPlugins Output

```json
{
  "data": {
    "allSitePlugin": {
      "edges": [
        {
          "node": {
            "name": "dev-404-page",
            "nodeAPIs": [
              "createPagesStatefully"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby/dist/internal-plugins/dev-404-page",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "load-babel-config",
            "nodeAPIs": [
              "onPreBootstrap"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby/dist/internal-plugins/load-babel-config",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "internal-data-bridge",
            "nodeAPIs": [
              "sourceNodes",
              "onCreatePage"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby/dist/internal-plugins/internal-data-bridge",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "prod-404",
            "nodeAPIs": [
              "onCreatePage"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby/dist/internal-plugins/prod-404",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "query-runner",
            "nodeAPIs": [
              "onCreatePage"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby/dist/internal-plugins/query-runner",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "webpack-theme-component-shadowing",
            "nodeAPIs": [
              "onCreateWebpackConfig"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby/dist/internal-plugins/webpack-theme-component-shadowing",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-plugin-react-helmet",
            "nodeAPIs": [],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-plugin-react-helmet",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-transformer-sharp",
            "nodeAPIs": [
              "onCreateNode",
              "setFieldsOnGraphQLNodeType",
              "onPreExtractQueries"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-transformer-sharp",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-plugin-sharp",
            "nodeAPIs": [
              "onPreInit"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-plugin-sharp",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-plugin-netlify",
            "nodeAPIs": [
              "onCreateWebpackConfig",
              "onPostBuild"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-plugin-netlify",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-transformer-remark",
            "nodeAPIs": [
              "onCreateNode",
              "setFieldsOnGraphQLNodeType"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-transformer-remark",
            "pluginOptions": {
              "resolve": "gatsby-remark-images"
            }
          }
        },
        {
          "node": {
            "name": "gatsby-plugin-manifest",
            "nodeAPIs": [
              "onPostBootstrap"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-plugin-manifest",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-transformer-remark",
            "nodeAPIs": [
              "onCreateNode",
              "setFieldsOnGraphQLNodeType"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-transformer-remark",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-remark-prismjs",
            "nodeAPIs": [],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-remark-prismjs",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-source-filesystem",
            "nodeAPIs": [
              "sourceNodes",
              "setFieldsOnGraphQLNodeType"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-source-filesystem",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-source-filesystem",
            "nodeAPIs": [
              "sourceNodes",
              "setFieldsOnGraphQLNodeType"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-source-filesystem",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-source-filesystem",
            "nodeAPIs": [
              "sourceNodes",
              "setFieldsOnGraphQLNodeType"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-source-filesystem",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-plugin-page-creator",
            "nodeAPIs": [
              "createPagesStatefully"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-plugin-page-creator",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-plugin-page-creator",
            "nodeAPIs": [
              "createPagesStatefully"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-plugin-page-creator",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-plugin-netlify",
            "nodeAPIs": [
              "onCreateWebpackConfig",
              "onPostBuild"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-plugin-netlify",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "default-site-plugin",
            "nodeAPIs": [
              "onCreateNode",
              "createPages",
              "onCreatePage"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts",
            "pluginOptions": {
              "resolve": null
            }
          }
        },
        {
          "node": {
            "name": "gatsby-plugin-page-creator",
            "nodeAPIs": [
              "createPagesStatefully"
            ],
            "resolve": "c:/Users/prp12.000/GitHub-Repos/react/gatsby/pat-facts/node_modules/gatsby-plugin-page-creator",
            "pluginOptions": {
              "resolve": null
            }
          }
        }
      ]
    }
  }
}
```
