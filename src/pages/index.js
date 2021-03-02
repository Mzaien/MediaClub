import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"
import { Heading } from "@chakra-ui/react"

const IndexPage = ({ data }) => {
  const {
    postsQuery: { nodes: allPosts },
  } = data

  return (
    <Layout>
      <SEO title="الصفحة الرئيسية" />
      <Heading mb={6}>جديد النادي الإعلامي</Heading>
      {allPosts.map(post => {
        return <PostCard key={post.id} post={post} />
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    postsQuery: allPrismicPost {
      nodes {
        ...PostTag
        ...PostCard
      }
    }
  }
`

export default IndexPage
