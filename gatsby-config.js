require("dotenv").config()
const linkResolver = require("./src/utils/linkResolver")
require("dotenv").config()
module.exports = {
  flags: { DEV_WEBPACK_CACHE: true },
  siteMetadata: {
    title: `النادي الإعلامي`,
    description: `موقع النادي الإعلامي في جامعة الملك فهد للبترول والمعادن.`,
    author: `النادي الإعلامي`, // Used in post page
    url: `https://www.mckfupm.com/`,
    image: `/images/media-club-logo.png`,
    twitterUsername: `@MediaKfupm`,
    mainNavigationLinks: [
      {
        name: "عن النادي",
        dest: "/about",
      },
      {
        name: "الانضمام للنادي",
        dest: "/join-us",
      },
      {
        name: "تواصل معنا",
        dest: "/contact-us",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        slugify: {
          decamelize: false,
        },
      },
    },
    `gatsby-plugin-emotion`,
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
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        // /**
        //  * @property {boolean} [isUsingColorMode=true]
        //  * if false, this plugin will not use <ColorModeProvider />
        //  */
        // isUsingColorMode: true,
      },
    },

    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "mediaclub",
        linkResolver: () => doc => linkResolver(doc),
        schemas: {
          homepage: require("./src/schemas/homepage.json"),
          post: require("./src/schemas/post.json"),
          tag: require("./src/schemas/tag.json"),
          navigation: require("./src/schemas/navigation.json"),
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-splitbee`,
      options: {
        includeInDevelopment: false,
        delayTimeout: 0,
        disableCookie: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `موقع النادي الإعلامي`,
        short_name: `MCKfupm`,
        start_url: `/`,
        background_color: `#5eada4`,
        theme_color: `#5eada4`,
        display: `minimal-ui`,
        icon: `src/images/media-club-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
      },
    },
  ],
}
