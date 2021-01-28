import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  VStack,
  Stack,
  Container,
  Box,
  IconButton,
  Button,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react"
import NavMenu from "./navigation-menu"
import { CloseIcon, ChevronDownIcon } from "@chakra-ui/icons"
import mainNavLinks from "../misc/main-navigation-links"
import secondaryNavLinks, {
  secondarySubLinkPrefix,
} from "../misc/secondary-navigation-links"

const NavDrawer = ({ isOpen, onClose, navContainerStyles }) => {
  const size = useBreakpointValue({
    base: "full",
    md: "xs",
  })

  const [isDesktop] = useMediaQuery("(min-width: 48em)")

  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      placement="top"
      size={size}
      allowPinchZoom
    >
      <DrawerOverlay>
        <DrawerContent>
          {!isDesktop && (
            <Container
              {...navContainerStyles}
              d="inline-flex"
              flexDir="row-reverse"
            >
              <IconButton
                aria-label="أغلق التنقل الثانوي"
                colorScheme="white"
                size="sm"
                icon={<CloseIcon color="black" />}
                onClick={onClose}
              />
            </Container>
          )}
          <DrawerBody py={5}>
            <Box overflowY="auto" d="flex" flexDir="column" h="full">
              {!isDesktop && (
                <VStack spacing={10} mb={10}>
                  {mainNavLinks.map((item, index) => (
                    <Box
                      as={Link}
                      to={item.dest}
                      key={item.name + index}
                      fontSize="xl"
                      fontWeight="600"
                    >
                      {item.name}
                    </Box>
                  ))}
                </VStack>
              )}
              <Stack
                spacing={[8, null, 16]}
                mt="auto"
                mb={[10, null, 0]}
                direction={["column", null, "row"]}
                align="center"
                justify="center"
              >
                {isDesktop
                  ? secondaryNavLinks.map((item, index) => {
                      const { name, dest, subLinks } = item

                      const navButtonStyles = {
                        backgroundColor: "white",
                        _focus: {
                          boxShadow: "none",
                        },
                        color: "black",
                      }

                      return !subLinks ? (
                        <Button
                          as={Link}
                          to={dest}
                          {...navButtonStyles}
                          key={item.name + index}
                        >
                          {name}
                        </Button>
                      ) : (
                        <React.Fragment key={item.name + index}>
                          <NavMenu
                            menuButtonStyles={navButtonStyles}
                            menuButtonText={name}
                            menuMainItem={{ name, dest }}
                            menuItems={subLinks}
                            menuItemsPrefix={secondarySubLinkPrefix}
                            rightIcon={<ChevronDownIcon color="black" />}
                          />
                        </React.Fragment>
                      )
                    })
                  : secondaryNavLinks.map((item, index) => (
                      <Box
                        as={Link}
                        to={item.dest}
                        fontSize="sm"
                        fontWeight="600"
                        key={item.name + index}
                      >
                        {item.name}
                      </Box>
                    ))}
              </Stack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

NavDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  navContainerStyles: PropTypes.object.isRequired,
}

export default NavDrawer
