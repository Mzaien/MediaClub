import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box, Heading, Text, useColorMode } from "@chakra-ui/react"
import PostCardImage from "./post-card-image"

const PostCard = ({ post, alternativeTag, isVertical }) => {
  const { colorMode } = useColorMode()
  const {
    data: {
      main_image,
      embed_link,
      title,
      content,
      short_description,
      post_tag: {
        tagDocument: { tagData },
      },
    },
    first_publication_date,
    postPath,
  } = post

  return (
    <Box
      as="article"
      mb={5}
      border="1px"
      borderColor="gray.200"
      borderRadius="md"
      _hover={{
        borderColor: "teal.200",
      }}
      _focus={{
        outline: "none",
        borderColor: "teal.200",
      }}
    >
      <Box
        as={Link}
        to={postPath}
        d="flex"
        flexDirection={isVertical ? "column" : ["column", null, "row"]}
      >
        <Box
          order={isVertical ? 2 : [2, null, 1]}
          p={8}
          pt={5}
          flexGrow="1"
          maxW={isVertical ? "full" : { base: "full", md: "60%" }}
          d="flex"
          flexDirection="column"
        >
          <Box flexGrow="1">
            <Box
              as="small"
              mb={5}
              d="inline-block"
              color={colorMode === "light" ? "gray.500" : "gray.300"}
            >
              {alternativeTag || tagData.content_type}
            </Box>
            <Heading as="h3" mb={5}>
              {title.text}
            </Heading>
            <Text fontSize="md" noOfLines={2}>
              {short_description || content.text}
            </Text>
          </Box>
          <Text fontWeight="bold" mt={3}>
            <time>{first_publication_date}</time>
          </Text>
        </Box>
        <PostCardImage
          image={main_image}
          embedLink={embed_link}
          directionStyles={{
            order: isVertical ? 1 : [1, null, 2],
            borderRadius: isVertical
              ? "4px 4px 0 0"
              : {
                  base: "4px 4px 0 0",
                  md: "4px 0 0 4px",
                },
            maxW: isVertical ? "full" : { base: "full", md: "40%" },
          }}
        />
      </Box>
    </Box>
  )
}

/**
 * See fragment `PostCard` in the src/fragments/posts.js file for post properties
 */
PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  alternativeTag: PropTypes.string, // Use this prop to enforce a different tag than post's original tag
  isVertical: PropTypes.bool,
}

export default PostCard
