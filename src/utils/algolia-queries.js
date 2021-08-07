const indexName = require("../components/algolia/indexName")

const query = `{
    postsQuery: allPrismicPost {
        nodes {
            postId: id
            postPath: gatsbyPath(filePath: "/post/{PrismicPost.prismicId}")
            data {
            title {
                text
            }
            content {
                text
            }
            short_description
            post_tag {
                document {
                    ... on PrismicTag {
                        id
                        data {
                            content_type
                        }
                    }
                }
            }
            }
        }
    }
}`

function postsToAlgoliaRecords({ data }) {
  const {
    postsQuery: { nodes: posts },
  } = data

  const records = posts.map(post => {
    // Extract information used in Algolia records
    const {
      postPath,
      postId,
      data: {
        title: { text: titleText },
        content: { text: contentText },
        short_description,
        post_tag: {
          document: {
            data: { content_type: postTag },
          },
        },
      },
    } = post

    // Return an Algolia record
    return {
      objectID: postId, // Required field by Algolia
      postTitle: titleText,
      postContent: contentText,
      postDescription: short_description,
      postPath,
      postTag,
    }
  })

  return records
}

const queries = [
  {
    query,
    transformer: postsToAlgoliaRecords,
    indexName,
  },
]

module.exports = queries
