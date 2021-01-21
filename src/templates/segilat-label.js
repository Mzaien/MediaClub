import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Box, Heading, Text } from "@chakra-ui/react"
import Img from "gatsby-image"

const SegilatLabelTemplate = ({ data, pageContext: { label } }) => {
  const {
    postsQuery: { nodes: posts },
  } = data

  return (
    <Layout>
      <SEO title={label} />
      <Container maxW="md">
        {posts.map(post => (
          <Box
            as="article"
            mb={5}
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            _hover={{
              borderColor: "teal.200",
            }}
            key={post.id}
          >
            <Box
              as={Link}
              to={`/p/${post.id.split("-")[0]}/${post.uid}`}
              d="flex"
              flexDirection={["column", null, "row"]}
            >
              <Box
                order={[2, null, 1]}
                p={8}
                pt={5}
                flexGrow="1"
                d="flex"
                flexDirection="column"
              >
                <Box flexGrow="1">
                  <Box as="small" mb={5} d="inline-block" color="gray.500">
                    {label}
                  </Box>
                  <Heading as="h5" mb={5}>
                    {post.data.title.text}
                  </Heading>
                  <Text fontSize="md">
                    {post.data.content.text.slice(0, 300) + "..."}
                  </Text>
                </Box>
                <Text fontWeight="bold" mt={3}>
                  <time>{post.first_publication_date}</time>
                </Text>
              </Box>

              <Box
                order={[1, null, 2]}
                minW="35%"
                borderTopLeftRadius="md"
                borderTopRightRadius={["md", null, "none"]}
                borderBottomLeftRadius={[null, null, "md"]}
              >
                <Img
                  fluid={post.data.main_image?.fluid}
                  alt={post.data.main_image.alt}
                  style={{
                    borderRadius: "inherit",
                  }}
                  imgStyle={{
                    objectFit: "cover",
                    borderRadius: "inherit",
                  }}
                />
              </Box>
            </Box>
          </Box>
        ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($label: String) {
    postsQuery: allPrismicSegilatPodcast(
      filter: { data: { label: { eq: $label } } }
    ) {
      nodes {
        data {
          main_image {
            fluid(maxWidth: 900) {
              ...GatsbyPrismicImageFluid
            }
            alt
          }
          content {
            text
          }
          title {
            text
          }
        }
        first_publication_date(formatString: "DD MMM, YYYY", locale: "ar")
        id
        uid
      }
    }
  }
`

export default SegilatLabelTemplate
