import { useStaticQuery, graphql } from "gatsby"
import { Box, Heading } from "@chakra-ui/react"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "media-club-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const {
    childImageSharp: { fluid },
  } = data.file

  return (
    <header>
      <Navbar fluid={fluid} />
      <Box
        as="section"
        textAlign="center"
        width="max-content"
        mx="auto"
        mb={[5, 10]}
      >
        <Heading as="h1" mt="4">
          {siteTitle}
        </Heading>
      </Box>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
