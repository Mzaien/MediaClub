import React from "react"
import { PreviewStoreProvider } from "gatsby-source-prismic"
import { CacheProvider } from "@emotion/react"
import { createMyCache } from "./src/utils/emation-cache"

export const wrapRootElement = ({ element }) => (
  <CacheProvider value={createMyCache()}>
    <PreviewStoreProvider>{element}</PreviewStoreProvider>
  </CacheProvider>
)
