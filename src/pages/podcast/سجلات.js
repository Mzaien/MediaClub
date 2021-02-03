import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostCard from "../../components/post-card"

const SegilatPage = () => {
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
            youtube_link {
              thumbnail_url
              title
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

export default SegilatPage
