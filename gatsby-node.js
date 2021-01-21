const path = require("path")

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      segilatLabelsQuery: allPrismicSegilatPodcast {
        distinct(field: data___label)
      }

      segilatPodcastPostQuery: allPrismicSegilatPodcast {
        nodes {
          id
          uid
        }
      }
    }
  `)

  /**
   * Create pages for سجلات labels. For example a page for ملفات أاكاديمية or بينيات and so on.
   */
  const {
    segilatLabelsQuery: { distinct: segilatLabels },
  } = data
  segilatLabels.forEach(label => {
    const slug = label.split(" ").join("-")
    createPage({
      path: `/podcast/سجلات/${slug}`,
      component: path.resolve("./src/templates/segilat-label.js"),
      context: {
        label,
      },
    })
  })

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
    })
  })
}
