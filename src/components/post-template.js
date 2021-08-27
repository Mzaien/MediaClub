import React from "react"
import PropTypes from "prop-types"
import { Box, Heading, SimpleGrid } from "@chakra-ui/react"
import { RichText } from "prismic-reactjs"
import Share from "./share-list"
import PostHeaderContent from "./post-header-content"
import htmlSerializer from "../utils/htmlSerializer"
import PostMetaData from "./post-meta-data"
import PostBreadcrumb from "./post-breadcrumb"
import slugifyDashes from "../utils/slugify-dashes"
import Recomannded from "./recomannded"

const PostTemplate = ({ post, postMetaData, recommendedPosts }) => {
  const {
    data: {
      title,
      content,
      main_image,
      embed_link: { embed_url, provider_name },
      post_tag,
    },
    formattedPubDate,
    machinePubDate,
  } = post
  const { author, twitterUsername } = postMetaData
  const url = typeof window !== "undefined" ? window.location.href : ""

  const {
    tagDocument: {
      tagData: { content_type: parentType },
    },
  } = post_tag

  const breadcrumbLinks = [
    {
      name: parentType,
      dest: `/podcast/${slugifyDashes(parentType)}`,
    },
    {
      name: title.text,
    },
  ]

  return (
    <Box mt={[3, 7, 6]}>
      <PostBreadcrumb breadcrumbLinks={breadcrumbLinks} />
      <Box as="article" mt={5}>
        <header>
          <Heading as="h1" mb={7}>
            {title.text}
          </Heading>
        </header>
        <PostHeaderContent
          provider_name={provider_name}
          embed_url={embed_url}
          main_image={main_image}
          main_image_alt={main_image.alt || title.text}
        />
        <Share url={url} title={title.text} twitterUsername={twitterUsername} />
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

        {recommendedPosts && (
          <Recomannded recommendedPosts={recommendedPosts} />
        )}
      </Box>
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
  recommendedPosts: PropTypes.array,
}

export default PostTemplate
