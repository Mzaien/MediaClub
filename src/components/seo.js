import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

function Seo({ description, lang, meta, title, image, article }) {
  const { site } = useStaticQuery(query)
  const { pathname } = useLocation()

  const {
    siteTitle,
    defaultDescription,
    defaultImage,
    siteURL,
    twitterUsername,
  } = site.siteMetadata || {}

  const metaDescription = description?.substring(0, 200) || defaultDescription
  const metaURL = `${siteURL}${pathname}`
  const metaImage = image || `${siteURL}${defaultImage}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
        dir: "rtl",
      }}
      title={title}
      titleTemplate={siteTitle ? `%s | ${siteTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: metaURL,
        },
        {
          property: `og:image`,
          content: metaImage,
        },
        {
          property: `og:type`,
          content: article ? `article` : `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: twitterUsername || ``,
        },
        {
          name: `twitter:site`,
          content: twitterUsername || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: metaImage,
        },
      ].concat(meta)}
    >
      <script async src="https://cdn.splitbee.io/sb.js"></script>
    </Helmet>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        defaultDescription: description
        defaultImage: image
        siteURL: url
        twitterUsername
      }
    }
  }
`

Seo.defaultProps = {
  lang: `ar`,
  meta: [],
  description: ``,
  article: false,
}

Seo.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  dir: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  article: PropTypes.bool,
}

export default Seo
