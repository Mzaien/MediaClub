import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostTemplate from "../../components/post-template"

const PostPage = ({ data }) => {
  const post = data.prismicPost
  const { postMetaData } = data.site
  const { title, content, main_image, short_description } = post.data

  return (
    <Layout>
      <SEO
        title={title.text}
        description={short_description || content.text}
        image={main_image.url}
        article
      />
      <PostTemplate post={post} postMetaData={postMetaData} />
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    prismicPost(id: { eq: $id }) {
      ...PostTemplate
    }

    site {
      ...PostMetaData
    }
  }
`

export default PostPage
