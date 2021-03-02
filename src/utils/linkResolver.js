const linkResolver = doc => {
  console.log("doc", doc)
  if (doc.type === "post") {
    return `/post/${doc.id.toLowerCase()}`
  }

  return "/"
}

module.exports = linkResolver
