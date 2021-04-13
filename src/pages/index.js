import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ListOfPosts from "../components/list-of-posts"

const IndexPage = ({ data }) => {
  const {
    postsQuery: { nodes: allPosts },
  } = data

  return (
    <Layout>
      <SEO title="الصفحة الرئيسية" />
      <ListOfPosts title="جديد النادي الإعلامي" posts={allPosts} />
    </Layout>
  )
}

export const query = graphql`
  {
    postsQuery: allPrismicPost(
      sort: { fields: first_publication_date, order: DESC }
      limit: 20
    ) {
      nodes {
        ...PostTag
        ...PostCard
      }
    }
  }
`

export default IndexPage
