const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      segilatPodcastPostQuery: allPrismicSegilatPodcast {
        nodes {
          id
          uid
        }
      }
    }
  `)

  /**
   * Create pages for all posts under the سجلات podcast.
   */
  const {
    segilatPodcastPostQuery: { nodes: segilatPosts },
  } = data
  segilatPosts.forEach(post => {
    const shortId = post.id.split("-")[0]
    const slug = `${shortId}/${post.uid}`
    createPage({
      path: `/p/${slug}`,
      component: path.resolve("./src/templates/podcast-post.js"),
      context: {
        id: post.id,
      },
    })
  })
}
