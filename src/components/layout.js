/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { Container } from "@chakra-ui/react"
import { useTheme } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const theme = useTheme()
  console.log("theme", theme)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `عنوان الصفحة`} />
      <main>
        <Container maxW="lg">{children}</Container>
      </main>
      <footer></footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
