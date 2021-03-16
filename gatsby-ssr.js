import React from "react"
import { PreviewStoreProvider } from "gatsby-source-prismic"

import { ColorModeScript } from "@chakra-ui/react"
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript initialColorMode="system" key="chakra-ui-no-flash" />,
  ])
}

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider>{element}</PreviewStoreProvider>
)
