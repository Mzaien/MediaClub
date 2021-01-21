import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button, Container, SimpleGrid, Text } from "@chakra-ui/react"
import homePageLinks from "../misc/home-page-links"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="الصفحة الرئيسية" />
      <Container maxW="md">
        <SimpleGrid columns={[1, null, 2]} spacing={10} maxW="45rem" mx="auto">
          {homePageLinks.map((item, index) => (
            <Button h="10rem" as={Link} to={item.dest} key={item.name + index}>
              <Text fontSize="xl">{item.name}</Text>
            </Button>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default IndexPage
