import React from "react"
import { PreviewStoreProvider } from "gatsby-source-prismic"
import { ColorModeScript } from "@chakra-ui/react"
import { CacheProvider } from "@emotion/react"
import { createMyCache } from "./src/utils/emation-cache"

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript type='cookie' initialColorMode="dark" key="chakra-ui-no-flash" />,
  ])
}

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={createMyCache()}>
    <PreviewStoreProvider>{element}</PreviewStoreProvider>
  </CacheProvider>
)
