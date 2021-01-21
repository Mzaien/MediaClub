import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Container, Button, SimpleGrid, Text } from "@chakra-ui/react"

const PetrolPodcast = () => {
  const data = useStaticQuery(graphql`
    {
      labels: allPrismicSegilatPodcast {
        distinct(field: data___label)
      }
    }
  `)

  const { distinct: labels } = data.labels

  return (
    <Layout>
      <SEO title="بودكاست سجلات" />
      <Container maxW="md">
        <SimpleGrid columns={[2]} spacing={[4, null, 8]} maxW="45rem" mx="auto">
          {labels?.map(label => (
            <Button
              h="5rem"
              as={Link}
              to={`${label.split(" ").join("-")}`}
              key={label}
            >
              <Text fontSize="xl">{label}</Text>
            </Button>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default PetrolPodcast
