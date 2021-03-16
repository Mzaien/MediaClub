import React from "react"
import PropTypes from "prop-types"
import { Box, Image } from "@chakra-ui/react"
import Img from "gatsby-image"

const PostCardImage = ({ image, embedLink, directionStyles }) => {
  return image.fluid || embedLink ? (
    <Box minW="40%" {...directionStyles}>
      {image.fluid ? (
        <Img
          fluid={image.fluid}
          alt={image.alt}
          style={{
            borderRadius: "inherit",
            height: "100%",
          }}
          imgStyle={{
            objectFit: "cover",
            borderRadius: "inherit",
          }}
        />
      ) : embedLink ? (
        <Image
          src={embedLink.thumbnail_url}
          alt={embedLink.title}
          w="full"
          h="full"
          borderRadius="inherit"
        />
      ) : undefined}
    </Box>
  ) : undefined
}

PostCardImage.propTypes = {
  image: PropTypes.shape({
    fluid: PropTypes.object.isRequired,
  }).isRequired,
  embedLink: PropTypes.shape({
    thumbnail_url: PropTypes.string,
    title: PropTypes.string,
  }),
  directionStyles: PropTypes.object,
}

export default PostCardImage
