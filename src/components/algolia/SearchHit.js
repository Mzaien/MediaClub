import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Text } from "@chakra-ui/react"

const SearchHit = ({ hit }) => {
  const { postPath, postTitle, postDescription } = hit

  return (
    <Box
      as={GatsbyLink}
      display="block"
      to={postPath}
      p={4}
      mb={3}
      borderRadius="md"
      border="2px"
      borderColor="teal.300"
      _hover={{
        background: "teal.400",
        color: "teal.50",
      }}
    >
      <Text as="strong">{postTitle}</Text>
      <Text>
        <small>{postDescription}</small>
      </Text>
    </Box>
  )
}

export default SearchHit
