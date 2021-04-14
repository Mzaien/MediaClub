import React from "react"
import PropTypes from "prop-types"
import { Box, Link, Flex } from "@chakra-ui/react"
import { FaTwitter } from "react-icons/fa"

const PostMetaData = ({ dateObject, author, twitterUsername }) => {
  const { formattedPubDate, machinePubDate } = dateObject
  const plainTwitterUsername = twitterUsername.replace("@", "")

  return (
    <Flex
      as="aside"
      direction="column"
      fontWeight="bold"
      mx={["auto", null, 0]}
    >
      <address>
        <Link
          rel="author noopener"
          href={`https://twitter.com/${plainTwitterUsername}`}
          variant="twitter"
          target="_blank"
          fontStyle="normal" // To avoid user agent default `italic` style of the `address` element
        >
          {author}
        </Link>
      </address>
      <Link
        href={`https://twitter.com/${plainTwitterUsername}`}
        target="_blank"
        rel="noopener"
        variant="twitter"
        mt={1.5}
      >
        <FaTwitter style={{ display: "inline-block" }} /> {plainTwitterUsername}
      </Link>
      <Box as="time" dateTime={machinePubDate} mt={[2, null, 6]}>
        {formattedPubDate}
      </Box>
    </Flex>
  )
}

PostMetaData.propTypes = {
  dateObject: PropTypes.shape({
    formattedPubDate: PropTypes.string.isRequired,
    machinePubDate: PropTypes.string.isRequired,
  }).isRequired,
  author: PropTypes.string.isRequired,
  twitterUsername: PropTypes.string.isRequired,
}

export default PostMetaData
