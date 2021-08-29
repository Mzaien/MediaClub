import React from "react"
import PropTypes from "prop-types"
import { chakra } from "@chakra-ui/react"
import Img from "gatsby-image"
import YouTubePlayer from "react-player/youtube"
import SoundCloudPlayer from "react-player/soundcloud"

const PostHeaderContent = ({
  provider_name,
  embed_url,
  main_image,
  main_image_alt,
  thumbnail_url,
}) => {
  const placeholderImage = main_image.url || thumbnail_url

  if (provider_name === "YouTube") {
    const ChakraYTPlayer = chakra(YouTubePlayer)
    return (
      <ChakraYTPlayer
        url={embed_url}
        width="100% !important"
        height={{
          base: "200px !important",
          md: "300px !important",
          lg: "500px !important",
        }}
        light={placeholderImage}
        playing
        config={{
          youtube: {
            playerVars: {
              rel: 0,
            },
          },
        }}
        controls
      />
    )
  }
  if (provider_name === "SoundCloud") {
    const ChakraSCPlayer = chakra(SoundCloudPlayer)
    return (
      <ChakraSCPlayer
        url={embed_url}
        width="100% !important"
        height={{
          base: "200px !important",
          md: "300px !important",
          lg: "500px !important",
        }}
        light={placeholderImage}
        playing
      />
    )
  }
  if (main_image.fluid) {
    return <Img fluid={main_image.fluid} alt={main_image_alt} />
  }

  /**
   * TODO: return some placeholder content (like an image or something)
   */
  return null
}

PostHeaderContent.propTypes = {
  provider_name: PropTypes.string.isRequired,
  embed_url: PropTypes.string.isRequired,
  main_image: PropTypes.object.isRequired,
  main_image_alt: PropTypes.string.isRequired,
  thumbnail_url: PropTypes.string,
}

export default PostHeaderContent
