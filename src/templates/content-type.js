import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Layout from "../components/layout"
import { Button, SimpleGrid, Text } from "@chakra-ui/react"

const ContentTypeTemplate = ({ pageContext }) => {
  const {
    subLinks,
    meta: { title },
  } = pageContext

  return (
    <Layout>
      <Seo title={title} />
      <SimpleGrid columns={[1, 2, 3]} spacing={4} mx="auto">
        {subLinks.map((link, index) => (
          <Button
            aria-label="Link"
            h="6rem"
            as={Link}
            to={`/podcast/${link.dest}`}
            key={link.name + index}
          >
            <Text fontSize="xl">{link.name}</Text>
          </Button>
        ))}
      </SimpleGrid>
    </Layout>
  )
}

ContentTypeTemplate.propTypes = {
  pageContext: PropTypes.shape({
    subLinks: PropTypes.array.isRequired,
    meta: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ContentTypeTemplate
