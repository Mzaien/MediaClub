import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Stack, Link } from "@chakra-ui/react"
import { RiTwitterFill, RiInstagramFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import PropTypes from "prop-types"

const Footer = ({ links, twitter }) => {
  return (
    <Box
      as="footer"
      bg="blackAlpha.800"
      color="white"
      py={5}
      px={7}
      marginTop={10}
    >
      <Stack spacing={7} direction={["column", "row"]} align="center">
        {links.map((link, index) => {
          const { name, dest } = link

          return (
            <Box as={GatsbyLink} to={dest} key={index + name}>
              {name}
            </Box>
          )
        })}
        <Stack isInline flexGrow="1" justifyContent="flex-end" spacing={5}>
          <Link
            href={`https://twitter.com/${twitter}`}
            aria-label="حساب تويتر"
            target="_blank"
            rel="noopener"
          >
            <RiTwitterFill size="1.5rem" />
          </Link>
          <Link
            href={`https://www.instagram.com/${twitter}`}
            aria-label="حساب انستاقرام"
            target="_blank"
            rel="noopener"
          >
            <RiInstagramFill size="1.5rem" />
          </Link>
          <Link
            href={`mailto:MediaKfupm@gmail.com`}
            aria-label="الايميل "
            target="_blank"
            rel="noopener"
          >
            <MdEmail size="1.5rem" />
          </Link>
        </Stack>
      </Stack>
    </Box>
  )
}

Footer.propTypes = {
  links: PropTypes.array.isRequired,
  twitter: PropTypes.string.isRequired,
}

export default Footer
