import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostTemplate from "../../components/post-template"

const PostPage = ({ data, params }) => {
  const post = data.prismicPost.data

  return (
    <Layout>
      <SEO
        title={post.title.text}
        description={post.content.text}
        image={post.main_image.url}
        article
      />
      <PostTemplate post={post} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    prismicPost(id: { eq: $id }) {
      ...PostTemplate
    }
  }
`

export default PostPage
