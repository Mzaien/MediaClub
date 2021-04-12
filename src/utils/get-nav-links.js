/**
 * This module is used in both React and Node so it should use CommonJS to avoid Node support issues
 */

const slugifyDashes = require("./slugify-dashes")

/**
 * Refer to the Prismic navigation for the exact schema
 * @param {Array} navItems Array containing navigation items coming from the Navigation document of Prismic
 * @returns {Array} Array containing navigation links structured in a way that can be displayed in the UI
 */
module.exports = function (navItems = []) {
  const navLinks = navItems.map(navItem => {
    const {
      primary: { primary_link_label },
      items,
    } = navItem

    const subLinks = items.map(({ sub_link_label }) => {
      const {
        document: {
          tagData: { content_type },
        },
      } = sub_link_label

      const slug = slugifyDashes(content_type)
      return {
        name: content_type,
        dest: slug,
      }
    })

    return {
      name: primary_link_label,
      dest: slugifyDashes(primary_link_label),
      subLinks,
    }
  })

  return navLinks
}
