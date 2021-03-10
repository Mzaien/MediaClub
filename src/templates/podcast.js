import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ListOfPosts from "../components/list-of-posts"

const Podcast = ({ data, pageContext: { meta } }) => {
  const {
    postsQuery: { nodes: posts },
  } = data

  return (
    <Layout>
      <SEO title={meta.title} />
      <ListOfPosts title={meta.title} posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  query($tagsStringArray: [ID]) {
    postsQuery: allPrismicPost(
      filter: { data: { post_tag: { id: { in: $tagsStringArray } } } }
    ) {
      nodes {
        ...PostCard
        ...PostTag
      }
    }
  }
`

Podcast.propTypes = {
  data: PropTypes.shape({
    postsQuery: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    tags: PropTypes.array,
    meta: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
  }),
}

export default Podcast
