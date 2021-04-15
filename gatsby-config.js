require("dotenv").config()
const linkResolver = require("./src/utils/linkResolver")
require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `النادي الإعلامي`,
    description: `موقع النادي الإعلامي في جامعة الملك فهد للبترول والمعادن.`,
    author: `النادي الإعلامي`, // Used in post page
    /**
     * @todo Should change URL when deployed to production
     */
    url: `https://media-club.mzaien.vercel.app`,
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
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_ADMIN_KEY,
    //     queries: require("./src/utils/algolia-queries"),
    //   },
    // },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        slugify: {
          decamelize: false,
        },
      },
    },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
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
