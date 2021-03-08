import React from "react"
import { Box, Heading } from "@chakra-ui/react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const PostRecommended = ({ title, postImage, postPath }) => {
  return (
    <Box
      as={Link}
      to={postPath}
      shadow="base"
      py={5}
      px={3}
      borderRadius={["md", null, "2xl"]}
      backgroundImage={`url(${postImage})`}
      backgroundPosition="center"
      backgroundSize="cover"
      height="3xs"
      d="flex"
      flexDir="column"
      alignItems="flex-start"
    >
      <Heading
        as="h4"
        fontSize="lg"
        mt="auto"
        backgroundColor="gray.400"
        color="white"
        borderRadius="md"
        p={2}
      >
        {title}
      </Heading>
    </Box>
  )
}

PostRecommended.propTypes = {
  title: PropTypes.string.isRequired,
  postImage: PropTypes.string.isRequired,
  postPath: PropTypes.string.isRequired,
}

export default PostRecommended
