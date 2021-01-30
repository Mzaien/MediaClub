import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "media-club-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_noBase64
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
