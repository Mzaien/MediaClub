import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { useColorMode } from "@chakra-ui/react"
import { FiMenu, FiSearch, FiMoon, FiSun } from "react-icons/fi"
import {
  Container,
  List,
  ListItem,
  Box,
  IconButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react"
import NavDrawer from "./navigation-drawer"
import logo from "../images/media-club-logo.png"

const navContainerStyles = {
  maxW: "md",
  py: 3,
  px: {
    base: 5,
    sm: 10,
    lg: 3,
  },
}

const Navbar = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          mainNavigationLinks {
            name
            dest
          }
        }
      }
    }
  `)
  const {
    site: {
      siteMetadata: { mainNavigationLinks },
    },
  } = data
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isDesktop] = useMediaQuery("(min-width: 48em)")

  return (
    <>
      <NavDrawer
        isOpen={isOpen}
        onClose={onClose}
        navContainerStyles={navContainerStyles}
        mainNavigationLinks={mainNavigationLinks}
      />
      <nav>
        <Container {...navContainerStyles}>
          <List d="flex" alignItems="center" justifyContent="center">
            <ListItem ml={5} key="home-page-1">
              <Link aria-label="الصفحة الرئيسية" to="/">
                <Box boxSize="sm" w="3rem" h="3rem">
                  <img src={logo} alt="شعار النادي الإعلامي" />
                </Box>
              </Link>
            </ListItem>
            {isDesktop &&
              mainNavigationLinks.map((item, index) => (
                <ListItem key={item.name + index} px={4}>
                  <Box
                    as={Link}
                    to={item.dest}
                    color={colorMode === "dark" ? "gray.100" : "gray.600"}
                    _hover={{
                      color: colorMode === "dark" ? "gray.300" : "gray.900",
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
                icon={
                  <FiSearch
                    color={colorMode === "dark" ? "white" : "black"}
                    fontSize="6xl"
                  />
                }
                colorScheme="whiteAlpha"
                mx={[1, 2]}
              />
            </ListItem>
            <ListItem mr={3} key="open-drawer-3">
              <IconButton
                aria-label="افتح التنقل الثانوي"
                icon={
                  <FiMenu
                    color={colorMode === "dark" ? "white" : "black"}
                    fontSize="6xl"
                  />
                }
                colorScheme="whiteAlpha"
                mx={[1, 2]}
                onClick={onOpen}
              />
            </ListItem>
            <ListItem mr={3} key="light-dark-toggol">
              <IconButton
                aria-label="غير النمط"
                as="button"
                onClick={toggleColorMode}
                align="center"
                icon={colorMode === "dark" ? <FiMoon /> : <FiSun />}
                mx={[1, 2]}
              />
            </ListItem>
          </List>
        </Container>
      </nav>
    </>
  )
}

export default Navbar
