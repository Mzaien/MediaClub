import { graphql } from "gatsby"

export const query = graphql`
  fragment PostCard on PrismicPost {
    id
    first_publication_date(formatString: "DD MMM, YYYY", locale: "ar")
    postPath: gatsbyPath(filePath: "/post/{PrismicPost.prismicId}")
    data {
      main_image {
        fluid(maxWidth: 900) {
          ...GatsbyPrismicImageFluid
        }
        alt
        url
      }
      content {
        text
      }
      title {
        text
      }
      short_description
      embed_link {
        title
        thumbnail_url
      }
    }
  }

  fragment PostTemplate on PrismicPost {
    formattedPubDate: first_publication_date(
      formatString: "DD MMM, YYYY"
      locale: "ar"
    )
    machinePubDate: first_publication_date
    data {
      short_description
      main_image {
        fluid(maxWidth: 900) {
          ...GatsbyPrismicImageFluid
        }
        alt
        url
      }
      content {
        raw
        text
      }
      title {
        text
      }
      embed_link {
        embed_url
        provider_name
        thumbnail_url
      }
    }
  }

  fragment PostTag on PrismicPost {
    data {
      post_tag {
        tagDocument: document {
          ... on PrismicTag {
            ...TagInfo
          }
        }
      }
    }
  }

  fragment PostMetaData on Site {
    postMetaData: siteMetadata {
      author
      twitterUsername
    }
  }

  fragment AllRecommendedPosts on PrismicPost {
    recommendedPostsData: data {
      body {
        ... on PrismicPostBodyRecommendedPosts {
          id
          recommendedPosts: items {
            recommended_post {
              isBroken
              document {
                ... on PrismicPost {
                  ...PostRecommended
                }
              }
            }
          }
        }
      }
    }
  }

  fragment PostRecommended on PrismicPost {
    id
    data {
      title {
        text
      }
      main_image {
        url
      }
      embed_link {
        thumbnail_url
      }
    }
    postPath: gatsbyPath(filePath: "/post/{PrismicPost.prismicId}")
  }
`
