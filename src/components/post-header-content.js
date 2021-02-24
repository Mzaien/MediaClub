import React from "react"
import PropTypes from "prop-types"
import { useMediaQuery } from "@chakra-ui/react"
import Img from "gatsby-image"
import YouTubePlayer from "react-player/youtube"
import SoundCloudPlayer from "react-player/soundcloud"

const PostHeaderContent = ({
  provider_name,
  embed_url,
  main_image,
  main_image_alt,
}) => {
  const [isTablet, isDesktop] = useMediaQuery([
    "(min-width: 499px)",
    "(min-width: 700px)",
  ])

  const heightStyle = isDesktop
    ? { height: "500px" }
    : isTablet
    ? { height: "300px" }
    : { height: "200px" }

  if (provider_name === "YouTube") {
    return (
      <YouTubePlayer
        url={embed_url}
        width="100%"
        {...heightStyle}
        light={main_image.url}
        playing
        config={{
          youtube: {
            playerVars: {
              origin: window.location.origin,
              rel: 0,
            },
          },
        }}
      />
    )
  }
  if (provider_name === "SoundCloud") {
    return (
      <SoundCloudPlayer
        url={embed_url}
        width="100%"
        {...heightStyle}
        light={main_image.url}
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
}

export default PostHeaderContent
