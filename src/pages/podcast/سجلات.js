import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostCard from "../../components/post-card"

const PetrolPodcast = () => {
  const data = useStaticQuery(graphql`
    {
      postsQuery: allPrismicSegilatPodcast(
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
          first_publication_date(formatString: "DD MMM, YYYY", locale: "ar")
          id
          uid
        }
      }
    }
  `)

  const { nodes: posts } = data.postsQuery

  return (
    <Layout>
      <SEO title="بودكاست سجلات" />
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  )
}

export default PetrolPodcast
