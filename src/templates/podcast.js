import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { Heading } from "@chakra-ui/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ListOfPosts from "../components/list-of-posts"

const Podcast = ({ data, pageContext: { meta } }) => {
  const {
    postsQuery: { nodes: posts },
  } = data

  return (
    <Layout>
      <Seo title={meta.title} />
      <Heading as="h1" my={6} textAlign="center">
        {meta.title}
      </Heading>
      <ListOfPosts posts={posts} columns={2} />
    </Layout>
  )
}

export const query = graphql`
  query ($subTagIDs: [ID]) {
    postsQuery: allPrismicPost(
      filter: { data: { post_tag: { id: { in: $subTagIDs } } } }
      sort: { fields: first_publication_date, order: DESC }
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
    podcastSubTags: PropTypes.array,
    meta: PropTypes.shape({
      title: PropTypes.string.isRequired,
      parentType: PropTypes.string,
    }).isRequired,
  }),
}

export default Podcast
