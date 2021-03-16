import { graphql } from "gatsby"

export const query = graphql`
  fragment TagInfo on PrismicTag {
    tagData: data {
      content_type
      content_type_label
    }
  }
`
