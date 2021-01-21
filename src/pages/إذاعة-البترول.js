import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { Button, Container, SimpleGrid, Text } from "@chakra-ui/react"

const pageUrls = ["سجلات", "بترولي", "ساندويتش", "قصيد-الفهد", "هنيهة", "قرآن"]

const PetrolPodcast = () => {
  return (
    <Layout>
      <SEO title="إذاعة البترول" />
      <Container maxW="md">
        <SimpleGrid
          columns={[2, null, 3]}
          spacing={[4, null, 8]}
          maxW="45rem"
          mx="auto"
        >
          {pageUrls.map((url, index) => (
            <Button h="5rem" as={Link} to={`/podcast/${url}`} key={url + index}>
              <Text fontSize="xl">{url.split("-").join(" ")}</Text>
            </Button>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default PetrolPodcast
