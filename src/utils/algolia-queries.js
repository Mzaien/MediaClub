// const escapeStringRegexp = require("escape-string-regexp")
// const pagePath = `content`
// const indexName = `mediaclub`
// const pageQuery = `{
//   allPrismicPetroliPodcast {
//     nodes {
//       dataRaw {
//         body {
//           primary {
//             text
//           }
//         }
//       }
//       slugs
//       type
//     }
//   }
// }`
// function pageToAlgoliaRecord({ nodes: { id,  fields, ...rest } }) {
//   return {
//     objectID: id,
//     ...fields,
//     ...rest,
//   }
// }
// const queries = [
//   {
//     query: pageQuery,
//     transformer: ({ data }) => data.pages.dataRaw.map(pageToAlgoliaRecord),
//     indexName,
//     settings: { attributesToSnippet: [`excerpt:20`] },
//   },
// ]
// module.exports = queries
