const path = require("path")
const getNavLinks = require("./src/utils/get-nav-links")

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
  createPodcastPages(navLinks, tags, createPage)
}

/**
 * Create a page for each podcast type (e.g. سجلات, قصيد الفهد)
 * @param {Array} navLinks Navigation links as modified by the getNavLinks function
 * @param {Array} tags Tags coming from the CMS
 * @param {Function} createPage Function coming from Gatsby
 */
function createPodcastPages(navLinks, tags, createPage) {
  const podcastTemplate = path.resolve("./src/templates/podcast.js")

  navLinks.forEach(navLink => {
    const mainContentTypeName = navLink.name
    const subLinks = navLink.subLinks

    // Create a page for each sub link (i.e. each podcast type)
    subLinks.forEach(subLink => {
      const path = `/podcast/${subLink.dest}`
      const podcastTags = tags.filter(
        tag => tag.data.content_type === subLink.name
      )
      const tagsStringArray = podcastTags.map(
        filteredTag => filteredTag.prismicId
      )
      const podcastSubTags = podcastTags
        .map(podcastTag => podcastTag.data.content_type_label)
        .filter(podcastTag => podcastTag !== null)

      createPage({
        path,
        component: podcastTemplate,
        context: {
          podcastSubTags,
          tagsStringArray,
          meta: {
            parentType: mainContentTypeName,
            title: subLink.name,
          },
        },
      })
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
