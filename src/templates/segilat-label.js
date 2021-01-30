import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "@chakra-ui/react"
import PostCard from "../components/post-card"

const SegilatLabelTemplate = ({ data, pageContext: { label } }) => {
  const {
    postsQuery: { nodes: posts },
  } = data

  return (
    <Layout>
      <SEO title={label} />
      <Container maxW="md">
        {posts.map(post => (
          <PostCard key={post.id} post={post} label={label} />
        ))}
      </Container>
    </Layout>
  )
}

export default SegilatLabelTemplate
