/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

function SEO({ description, lang, meta, title, image, article }) {
  const { site } = useStaticQuery(query)
  const { pathname } = useLocation()

  const { siteTitle, defaultDescription, defaultImage, siteURL, author } =
    site.siteMetadata || {}

  const metaDescription = description || defaultDescription
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
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author || ``,
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
    />
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
        author
      }
    }
  }
`

SEO.defaultProps = {
  lang: `ar`,
  meta: [],
  description: ``,
  article: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  dir: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  article: PropTypes.bool,
}

export default SEO
