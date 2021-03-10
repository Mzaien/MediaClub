const path = require("path")
const links = require("./src/misc/secondary-navigation-links")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const podcastLinks = links
    .map(link => link.subLinks)
    .filter(subLink => subLink !== undefined)
    .reduce((acc, val) => [...acc, ...val])

  const result = await graphql(`
    {
      tagsQuery: allPrismicTag {
        nodes {
          data {
            content_type
            content_type_label
          }
          prismicId
        }
      }
    }
  `)

  const {
    tagsQuery: { nodes: tags },
  } = result.data

  const podcastTemplate = path.resolve("./src/templates/podcast.js")
  podcastLinks.forEach(podcastLink => {
    const path = `/podcast/${podcastLink.dest}`
    const podcastTags = tags.filter(
      tag => tag.data.content_type === podcastLink.name
    )
    const tagsStringArray = podcastTags.map(
      filteredTag => filteredTag.prismicId
    )

    createPage({
      path,
      component: podcastTemplate,
      context: {
        tags: podcastTags,
        tagsStringArray,
        meta: {
          title: podcastLink.name,
        },
      },
    })
  })
}
