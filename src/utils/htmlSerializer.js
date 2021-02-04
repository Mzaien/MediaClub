import React from "react"
import { Link as GatsbyLink } from "gatsby"
import linkResolver from "./linkResolver"
import { Elements } from "prismic-reactjs"
import { Heading, Text, Link } from "@chakra-ui/react"

const htmlSerializer = function (type, element, content, children, key) {
  switch (type) {
    case Elements.paragraph:
      return <Text key={key}>{children}</Text>
    case Elements.heading1:
      return (
        <Heading key={key} as="h1" mb={5}>
          {children}
        </Heading>
      )
    case Elements.heading2:
      return (
        <Heading key={key} as="h2">
          {children}
        </Heading>
      )
    case Elements.heading3:
      return (
        <Heading key={key} as="h3">
          {children}
        </Heading>
      )
    case Elements.heading4:
      return (
        <Heading key={key} as="h4">
          {children}
        </Heading>
      )
    case Elements.heading5:
      return (
        <Heading key={key} as="h5">
          {children}
        </Heading>
      )
    case Elements.heading6:
      return (
        <Heading key={key} as="h6">
          {children}
        </Heading>
      )
    case Elements.hyperlink:
      const document = element.data
      const targetAttr = document.target ? { target: document.target } : {}
      const relAttr = document.target ? { rel: "noopener" } : {}
      let props = {
        ...targetAttr,
        ...relAttr,
        href: document.url,
      }

      // Links to internal web pages (e.g. posts)
      if (document.link_type === "Document") {
        return (
          <Link
            as={GatsbyLink}
            to={linkResolver(document)}
            key={document.id}
            variant="inline-link"
          >
            {children}
          </Link>
        )
      }

      // Links to external web pages
      return (
        <Link {...props} key={key} variant="inline-link">
          {children}
        </Link>
      )

    default:
      return null
  }
}

export default htmlSerializer
