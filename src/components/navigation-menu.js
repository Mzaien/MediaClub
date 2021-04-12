import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
} from "@chakra-ui/react"

const NavMenu = ({
  placement = "bottom",
  menuButtonStyles,
  menuButtonText,
  menuMainItem,
  menuItems,
  menuItemsPrefix = "/",
  rightIcon,
}) => {
  return (
    <>
      <Menu placement={placement}>
        <MenuButton as={Button} {...menuButtonStyles} rightIcon={rightIcon}>
          {menuButtonText}
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} to={`/${menuMainItem.dest}`}>
            {menuMainItem.name}
          </MenuItem>
          <MenuDivider />
          {menuItems?.map(menuItem => (
            <MenuItem
              as={Link}
              to={`${menuItemsPrefix}/${menuItem.dest}`}
              key={menuItem.name + menuItem.dest}
            >
              {menuItem.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  )
}

NavMenu.propTypes = {
  placement: PropTypes.string,
  menuButtonStyles: PropTypes.object,
  menuButtonText: PropTypes.string.isRequired,
  menuMainItem: PropTypes.exact({
    name: PropTypes.string.isRequired,
    dest: PropTypes.string.isRequired,
  }).isRequired,
  menuItemsPrefix: PropTypes.string,
  rightIcon: PropTypes.element,
}

NavMenu.defaultProps = {
  placement: "bottom",
  menuItemsPrefix: "/",
}

export default NavMenu
