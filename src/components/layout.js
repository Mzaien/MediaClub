import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Container } from "@chakra-ui/react"
import Fonts from "./fonts"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          mainNavigationLinks {
            name
            dest
          }
          twitterUsername
        }
      }
    }
  `)

  let { title, mainNavigationLinks, twitterUsername } =
    data.site.siteMetadata || {}

  twitterUsername = twitterUsername.replace("@", "")

  return (
    <>
      <Fonts />
      <Header siteTitle={title || `النادي الإعلامي`} />
      <Box d="flex" flexDirection="column" minHeight="100vh">
        <Box as="main" flexGrow="1">
          <Container maxW="md" my={5}>
            {children}
          </Container>
        </Box>
        <Footer links={mainNavigationLinks} twitter={twitterUsername} />
      </Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
