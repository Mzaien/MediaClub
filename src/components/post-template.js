import React from "react"
import PropTypes from "prop-types"
import { Box, Heading, useColorMode, SimpleGrid } from "@chakra-ui/react"
import { RichText } from "prismic-reactjs"
import Share from "./share-list"
import PostHeaderContent from "./post-header-content"
import htmlSerializer from "../utils/htmlSerializer"
import PostMetaData from "./post-meta-data"

const PostTemplate = ({ post, postMetaData }) => {
  const { colorMode } = useColorMode()
  const {
    data: {
      title,
      content,
      main_image,
      embed_link: { embed_url, provider_name },
    },
    formattedPubDate,
    machinePubDate,
  } = post
  const { author, twitterUsername } = postMetaData
  const url = typeof window !== "undefined" ? window.location.href : ""

  return (
    <Box as="article" mt={[6, 14, 12]}>
      <header>
        <Heading
          as="h1"
          py={7}
          borderTop={
            colorMode === "dark" ? "3px solid white" : "3px solid black"
          }
        >
          {title.text}
        </Heading>
      </header>
      <PostHeaderContent
        provider_name={provider_name}
        embed_url={embed_url}
        main_image={main_image}
        main_image_alt={main_image.alt || title.text}
      />
      <Share url={url} title={title} />
      <SimpleGrid
        gridTemplateColumns={["1fr", null, "150px 1fr"]}
        my={5}
        spacingX={5}
        spacingY={5}
      >
        <PostMetaData
          dateObject={{ formattedPubDate, machinePubDate }}
          author={author}
          twitterUsername={twitterUsername}
        />
        <Box fontSize="lg">
          <RichText render={content.raw} htmlSerializer={htmlSerializer} />
        </Box>
      </SimpleGrid>
    </Box>
  )
}

/**
 * TODO: Specify properties of the object
 */
PostTemplate.propTypes = {
  post: PropTypes.object.isRequired,
  postMetaData: PropTypes.shape({
    author: PropTypes.string.isRequired,
    twitterUsername: PropTypes.string.isRequired,
  }).isRequired,
}

export default PostTemplate
