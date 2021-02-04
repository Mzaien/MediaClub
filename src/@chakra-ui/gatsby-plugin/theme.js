import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  components: {
    Heading: {
      defaultProps: {
        size: null,
      },
    },
    Link: {
      variants: {
        "inline-link": ({ colorMode }) => ({
          color: colorMode === "light" ? "teal.500" : "teal.300",
          _hover: {
            color: colorMode === "light" ? "teal.700" : "teal.100",
            textDecoration: "underline",
          },
        }),
      },
    },
  },

  styles: {
    global: () => ({
      h1: {
        fontSize: ["4xl", null, "5xl"],
        lineHeight: 1.3,
      },
      h2: {
        fontSize: ["3xl", null, "4xl"],
        lineHeight: [1.33, null, 1.2],
      },
      h3: {
        fontSize: ["2xl", null, "3xl"],
        lineHeight: [1.33, null, 1.2],
      },
      "h4, h5, h6": {
        fontSize: "xl",
        lineHeight: 1.2,
      },
      p: {
        lineHeight: 1.9,
      },
    }),
  },
  direction: "rtl",
  sizes: {
    md: "62rem",
    lg: "92rem",
  },
  fonts: {
    body: "'Cairo', sans-serif",
    heading: "'Cairo', sans-serif",
  },
})

export default theme
