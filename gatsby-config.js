module.exports = {
  siteMetadata: {
    title: `النادي الإعلامي`,
    description: `موقع النادي الإعلامي في جامعة الملك فهد للبترول والمعادن.`,
    author: `@MediaKfupm`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        /**
         * @property {boolean} [isResettingCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        isResettingCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "mediawebsite",
        accessToken:
          "MC5YXzM5SkJBQUFDTUEycXhv.77-9Ku-_ve-_vRbvv71c77-9De-_vRI377-977-9JO-_vUEpdnDvv73vv71f77-977-9RO-_ve-_vTrvv73vv73vv70",
        schemas: {
          segelat_podcast: require("./src/schemas/segelat_podcast.json"),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
