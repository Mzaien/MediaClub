import { Link, useStaticQuery, graphql } from "gatsby"
import {
  Container,
  List,
  ListItem,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

import navLinks from "../misc/main-navigation-links"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "media-club-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
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
      <nav>
        <Container maxW={["sm", "md", "lg"]}>
          <List d="flex" justifyContent="space-evenly">
            {navLinks.map((item, index) => (
              <ListItem key={item.name + index}>
                <Button
                  as={Link}
                  to={item.dest}
                  colorScheme="white"
                  color="gray.600"
                  _hover={{
                    color: "gray.900",
                  }}
                >
                  {item.name}
                </Button>
              </ListItem>
            ))}
          </List>
        </Container>
      </nav>
      <Box
        as="section"
        textAlign="center"
        width="max-content"
        mx="auto"
        mb={[5, 10]}
      >
        <Box boxSize={[null, null, "xs", "sm"]} margin="0 auto">
          <Img fluid={fluid} alt="شعار النادي الإعلامي" />
        </Box>
        <Heading as="h1" mt="1">
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
