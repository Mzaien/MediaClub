import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "@chakra-ui/react"
import Fonts from "./fonts"

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

  return (
    <>
      <Fonts />
      <Header siteTitle={data.site.siteMetadata?.title || `العنوان`} />
      <main>
        <Container maxW="md" my={5}>
          {children}
        </Container>
      </main>
      <footer></footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
