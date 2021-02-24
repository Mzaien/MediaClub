import React from "react"
import PropTypes from "prop-types"
import { Box, Heading, useColorMode } from "@chakra-ui/react"
import { RichText } from "prismic-reactjs"
import Share from "./share-list"
import PostHeaderContent from "./post-header-content"
import htmlSerializer from "../utils/htmlSerializer"

const PostTemplate = ({ post }) => {
  const { colorMode } = useColorMode()
  const {
    title,
    content,
    main_image,
    embed_link: { embed_url, provider_name },
  } = post
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
      <Box my={5}>
        <RichText render={content.raw} htmlSerializer={htmlSerializer} />
      </Box>
    </Box>
  )
}

/**
 * TODO: Specify properties of the object
 */
PostTemplate.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostTemplate
