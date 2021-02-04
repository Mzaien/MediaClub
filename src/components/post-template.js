import React from "react"
import PropTypes from "prop-types"
import { Box, Heading } from "@chakra-ui/react"
import { RichText } from "prismic-reactjs"
import htmlSerializer from "../utils/htmlSerializer"
import Img from "gatsby-image"

const PostTemplate = ({ post }) => {
  const { title, content, main_image } = post

  return (
    <Box as="article">
      <header>
        <Heading as="h1" py={7} borderTop="3px solid black">
          {title.text}
        </Heading>
      </header>
      {main_image.fluid && (
        <Img fluid={main_image.fluid} alt={main_image.alt || title.text} />
      )}
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