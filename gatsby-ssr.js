// gatsby-ssr.js
import React from "react"
// import theme from "src/@chakra-ui/gatsby-plugin/theme.js"
import { ColorModeScript } from "@chakra-ui/react"
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript initialColorMode="light" key="chakra-ui-no-flash" />,
  ])
}
