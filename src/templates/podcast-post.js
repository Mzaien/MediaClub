import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box } from "@chakra-ui/react"
import { RichText } from "prismic-reactjs"

const PodcastPostTemplate = ({ data }) => {
  console.log("data is", data)
  const {
    data: { title, content },
  } = data.prismicSegilatPodcast

  return (
    <Layout>
      <SEO title={title.text} />
      <Box p={8} shadow="base" my={5} borderRadius="sm">
        <RichText render={content.raw} />
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    prismicSegilatPodcast(id: { eq: $id }) {
      id
      data {
        title {
          text
        }
        content {
          html
          raw
        }
      }
    }
  }
`

export default PodcastPostTemplate
