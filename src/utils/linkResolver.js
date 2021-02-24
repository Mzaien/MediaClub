const linkResolver = doc => {
  if (doc.type === "segilat_podcast") {
    return `/p/${doc.id.toLowerCase()}`
  }

  return "/"
}

module.exports = linkResolver
