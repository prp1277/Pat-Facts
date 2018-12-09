const path = require(`path`);

const siteMetadata = {
  siteUrl: "https://pat-facts.netlify.com/",
  title: "Pat Facts",
  description: "Personal Blog and Portfolio",
  homePage: "https://github.com/prp1277/pat-facts/#readme.md",
  contact: {
    name: "Patrick Powell",
    SocialMedia: {
      email: {
        address: "MailTo:prp1277@gmail.com",
        logo: "https://img.icons8.com/metro/50/e7e6e6/email.png"
      },
      github: {
        address: "https://github.com/prp1277/",
        logo: "https://img.icons8.com/metro/50/e7e6e6/github.png"
      },
      linkedin: {
        address: "https://linkedin.com/in/prpowell1277/",
        logo: "https://img.icons8.com/metro/50/e7e6e6/linkedin.png"
      },
      facebook: {
        address: "https://facebook.com/patrick.powell1",
        logo: "https://img.icons8.com/metro/50/e7e6e6/facebook.png"
      },
      twitter: {
        address: "https://twitter.com/patp0w/",
        logo: "https://img.icons8.com/metro/50/e7e6e6/twitter.png"
      },
      instagram: {
        address: "https://www.instagram.com/patp0w/",
        logo: "https://img.icons8.com/metro/50/e7e6e6/instagram.png"
      },
    },
  }
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "PatFacts",
        short_name: "PatFacts",
        start_url: ".",
        background_color: "#000",
        theme_color: "#0563c1",
        display: "minimal-ui",
        icon: "src/favicon.svg"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLinkNumbers: true,
              noInlineHighlight: false,
              aliases: {
                sh: "bash",
                js: "jsx"
              }
            }
          }
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/pages/img/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: false, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ], //End Plugins
};
