import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons"
import {
  Container,
  List,
  ListItem,
  Box,
  IconButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react"
import Img from "gatsby-image"
import NavDrawer from "./navigation-drawer"

import navLinks from "../misc/main-navigation-links"

const navContainerStyles = {
  maxW: "md",
  py: 3,
  px: {
    base: 5,
    sm: 10,
    lg: 3,
  },
}

const Navbar = ({ fluid }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isDesktop] = useMediaQuery("(min-width: 48em)")

  return (
    <>
      <NavDrawer
        isOpen={isOpen}
        onClose={onClose}
        navContainerStyles={navContainerStyles}
      />
      <nav>
        <Container {...navContainerStyles}>
          <List d="flex" alignItems="center">
            <ListItem ml={5} key="home-page-1">
              <Link aria-label="الصفحة الرئيسية" to="/">
                <Box boxSize="sm" w="3rem" h="3rem">
                  <Img
                    loading="auto"
                    fluid={fluid}
                    alt="شعار النادي الإعلامي"
                  />
                </Box>
              </Link>
            </ListItem>
            {isDesktop &&
              navLinks.map((item, index) => (
                <ListItem key={item.name + index} px={4}>
                  <Box
                    as={Link}
                    to={item.dest}
                    color="gray.600"
                    _hover={{
                      color: "gray.900",
                    }}
                    fontSize="lg"
                    fontWeight="600"
                    ml={4}
                  >
                    {item.name}
                  </Box>
                </ListItem>
              ))}
            <ListItem mr="auto" key="search-website-2">
              <IconButton
                aria-label="ابحث في الموقع"
                icon={<SearchIcon color="black" fontSize="2xl" />}
                colorScheme="white"
                size="sm"
              />
            </ListItem>
            <ListItem mr={3} key="open-drawer-3">
              <IconButton
                aria-label="افتح التنقل الثانوي"
                icon={<HamburgerIcon color="black" fontSize="2xl" />}
                colorScheme="white"
                size="sm"
                onClick={onOpen}
              />
            </ListItem>
          </List>
        </Container>
      </nav>
    </>
  )
}

Navbar.propTypes = {
  fluid: PropTypes.object.isRequired,
}

export default Navbar
