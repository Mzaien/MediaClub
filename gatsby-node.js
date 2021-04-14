const path = require("path")
const getNavLinks = require("./src/utils/get-nav-links")
const slugifyDashes = require("./src/utils/slugify-dashes")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      navigationQuery: prismicNavigation {
        data {
          nav {
            ... on PrismicNavigationNavNavItem {
              primary {
                primary_link_label
              }
              items {
                sub_link_label {
                  document {
                    ... on PrismicTag {
                      tagData: data {
                        content_type
                        content_type_label
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

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
    navigationQuery: {
      data: { nav: navigationItems },
    },
    tagsQuery: { nodes: tags },
  } = result.data

  const navLinks = getNavLinks(navigationItems)

  createContentTypePages(navLinks, createPage)
  createPodcastPages(tags, createPage)
}

/**
 * Create a page for each podcast type (e.g. سجلات, قصيد الفهد). Podcast types are all tags coming from the CMS.
 * @param {Array} tags Tags coming from the CMS
 * @param {Function} createPage Function coming from Gatsby
 */
function createPodcastPages(tags, createPage) {
  const podcastTemplate = path.resolve("./src/templates/podcast.js")

  /**
   * Organize tags in this way:
    [ { name: main_tag_name, subTags: [ { id, name }, ... ] }, ... ]
   */
  let allTags = []
  tags.forEach(tag => {
    const {
      prismicId,
      data: { content_type, content_type_label },
    } = tag
    const exists = allTags.find(
      existingTag => existingTag.name === content_type
    )

    if (exists) {
      exists.subTags.push({
        id: prismicId,
        name: content_type_label,
      })
    } else {
      allTags.push({
        name: content_type,
        subTags: [
          {
            id: prismicId,
            name: content_type_label,
          },
        ],
      })
    }
  })

  /**
   * Pages creation phase
   */
  allTags.forEach(tag => {
    const { name, subTags } = tag
    const path = `/podcast/${slugifyDashes(name)}`

    const subTagIDs = subTags.map(subTag => subTag.id)
    const subTagNames = subTags
      .map(subTag => subTag.name)
      .filter(subTagName => subTagName !== null)

    createPage({
      path,
      component: podcastTemplate,
      context: {
        podcastSubTags: subTagNames,
        subTagIDs,
        meta: {
          title: name,
        },
      },
    })
  })
}

/**
 * Create a page for each content type (e.g. إذاعة البترول، ديوان الفهد)
 * @param {Array} navLinks Navigation links as modified by the getNavLinks utility function
 * @param {Function} createPage createPage function coming from Gatsby
 */
function createContentTypePages(navLinks, createPage) {
  const contentTypeTemplate = path.resolve("./src/templates/content-type.js")
  navLinks.forEach(navLink => {
    const path = `/${navLink.dest}`
    createPage({
      path,
      component: contentTypeTemplate,
      context: {
        subLinks: navLink.subLinks,
        meta: {
          title: navLink.name,
        },
      },
    })
  })
}
