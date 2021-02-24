import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"
import { Heading } from "@chakra-ui/react"

const IndexPage = ({ data }) => {
  const {
    segilatPostsQuery: { nodes: segilatPosts },
  } = data

  return (
    <Layout>
      <SEO title="الصفحة الرئيسية" />
      <Heading mb={6}>جديد النادي الإعلامي</Heading>
      {segilatPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  )
}

export const query = graphql`
  {
    segilatPostsQuery: allPrismicSegilatPodcast(
      sort: { fields: first_publication_date, order: DESC }
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
          label
        }
        id
        first_publication_date(formatString: "DD MMM, YYYY", locale: "ar")
        postPath: gatsbyPath(filePath: "/p/{PrismicSegilatPodcast.prismicId}")
      }
    }
  }
`

export default IndexPage
