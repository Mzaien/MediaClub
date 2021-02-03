import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostTemplate from "../../components/post-template"

const SegilatPostPage = ({ data, params }) => {
  const post = data.prismicSegilatPodcast.data

  return (
    <Layout>
      <SEO title={post.title.text} />
      <PostTemplate post={post} />
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
        main_image {
          fluid(maxWidth: 1200) {
            ...GatsbyPrismicImageFluid
          }
          alt
        }
        youtube_link {
          thumbnail_url
          title
        }
      }
    }
  }
`

export default SegilatPostPage
