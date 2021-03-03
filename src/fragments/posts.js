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
    first_publication_date(formatString: "DD MMM, YYYY", locale: "ar")
    data {
      main_image {
        fluid(maxWidth: 900) {
          ...GatsbyPrismicImageFluid
        }
        alt
        url
      }
      content {
        raw
      }
      title {
        text
      }
      embed_link {
        embed_url
        provider_name
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
`
