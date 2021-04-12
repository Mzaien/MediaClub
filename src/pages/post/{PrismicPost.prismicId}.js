import React from "react"
import { graphql } from "gatsby"
import { withPreview } from "gatsby-source-prismic"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostTemplate from "../../components/post-template"

const PostPage = ({ data }) => {
  const post = data.prismicPost
  const { postMetaData } = data.site
  const { title, content, main_image, short_description } = post.data
  const { recommendedPostsData } = post
  const { nodes: defaultRecommendedPosts } = data.defaultRecommended

  const postRecommendedPosts =
    recommendedPostsData.body.length === 0
      ? defaultRecommendedPosts
      : recommendedPostsData.body[0].recommendedPosts.map(post => {
          const {
            recommended_post: { document },
          } = post
          return document
        }) // P.S. Thank you Prismic for making the schema this complex.

  return (
    <Layout>
      <SEO
        title={title.text}
        description={short_description || content.text}
        image={main_image.url}
        article
      />
      <PostTemplate
        post={post}
        postMetaData={postMetaData}
        recommendedPosts={postRecommendedPosts}
      />
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    prismicPost(id: { eq: $id }) {
      ...PostTemplate
      ...AllRecommendedPosts
      ...PostTag
    }

    site {
      ...PostMetaData
    }

    defaultRecommended: allPrismicPost(filter: { id: { ne: $id } }, limit: 3) {
      nodes {
        ...PostRecommended
      }
    }
  }
`

export default withPreview(PostPage)
