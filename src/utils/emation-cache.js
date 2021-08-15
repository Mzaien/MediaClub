import createCache from '@emotion/cache'

export const createMyCache = () =>
  createCache({
    key: 'css',
    stylisPlugins: [
      /* your plugins here */
    ],
  })

export const myCache = createMyCache()