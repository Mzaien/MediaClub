import React from "react"
import { Elements } from "prismic-reactjs"
import { Heading, Text } from "@chakra-ui/react"

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
    default:
      return null
  }
}

export default htmlSerializer
