import { Flex, IconButton } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { Link } from "gatsby"
// import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    {" "}
    <Flex direction="row" justify="space-evenly" py={4} align="center">
      <img alt="Logo" src="/public/icons/icon-96x96.png" />
      <Link>عن النادي</Link>
      <Link>التسجيل</Link>
      <Link>تواصل معنا</Link>
      <IconButton aria-label="Search database" icon={<SearchIcon />} />
    </Flex>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
