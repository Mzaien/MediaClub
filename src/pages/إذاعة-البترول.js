import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Button, SimpleGrid, Text } from "@chakra-ui/react"
import secondaryNavLinks, {
  secondarySubLinkPrefix,
} from "../misc/secondary-navigation-links"

const pageUrls = secondaryNavLinks.filter(
  item => item.name === "إذاعة البترول"
)[0].subLinks

const PetrolPodcast = () => {
  return (
    <Layout>
      <SEO title="إذاعة البترول" />
      <SimpleGrid
        columns={[2, null, 3]}
        spacing={[4, null, 8]}
        maxW="45rem"
        mx="auto"
      >
        {pageUrls.map((link, index) => (
          <Button
            h="5rem"
            as={Link}
            to={`${secondarySubLinkPrefix}/${link.dest}`}
            key={link.name + index}
          >
            <Text fontSize="xl">{link.name}</Text>
          </Button>
        ))}
      </SimpleGrid>
    </Layout>
  )
}

export default PetrolPodcast
