import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Box, Heading, Text, Image } from "@chakra-ui/react"
import Img from "gatsby-image"

const PostCard = ({ post }) => {
  const {
    data: { label, main_image, youtube_link, title, content },
    first_publication_date,
    postPath,
  } = post

  const renderPostImage = () =>
    main_image.fluid ? (
      <Img
        fluid={main_image.fluid}
        alt={main_image.alt}
        style={{
          borderRadius: "inherit",
          height: "100%",
        }}
        imgStyle={{
          objectFit: "cover",
          borderRadius: "inherit",
        }}
      />
    ) : youtube_link ? (
      <Image
        src={youtube_link.thumbnail_url}
        alt={youtube_link.title}
        w="full"
        h="full"
        borderRadius="inherit"
      />
    ) : undefined

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
    >
      <Box
        as={Link}
        to={postPath}
        d="flex"
        flexDirection={["column", null, "row"]}
      >
        <Box
          order={[2, null, 1]}
          p={8}
          pt={5}
          flexGrow="1"
          maxW={{ base: "full", md: "60%" }}
          d="flex"
          flexDirection="column"
        >
          <Box flexGrow="1">
            <Box as="small" mb={5} d="inline-block" color="gray.500">
              {label}
            </Box>
            <Heading as="h3" mb={5}>
              {title.text}
            </Heading>
            <Text fontSize="md" noOfLines={4}>
              {content.text}
            </Text>
          </Box>
          <Text fontWeight="bold" mt={3}>
            <time>{first_publication_date}</time>
          </Text>
        </Box>

        {renderPostImage() && (
          <Box
            flexGrow="1"
            order={[1, null, 2]}
            minW="40%"
            maxW={{ base: "full", md: "40%" }}
            borderTopLeftRadius="md"
            borderTopRightRadius={{
              base: "md",
              md: "none",
            }}
            borderBottomLeftRadius={{ md: "md" }}
          >
            {renderPostImage()}
          </Box>
        )}
      </Box>
    </Box>
  )
}

/**
 * TODO: Specify properties of the object
 */
PostCard.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostCard
