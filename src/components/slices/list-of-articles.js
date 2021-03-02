import React from "react"
import PropTypes from "prop-types"
import PostCard from "../post-card"
import { Heading, SimpleGrid } from "@chakra-ui/react"

const ListOfArticles = ({ title, articles }) => {
  const columnSize = articles.length > 1 ? [1, null, 2] : 1

  return (
    <>
      <Heading as="h2" my={6}>
        {title}
      </Heading>
      <SimpleGrid columns={columnSize}>
        {articles.map(article => {
          const {
            linked_post: { document: post },
          } = article
          return <PostCard key={post.id} post={post} />
        })}
      </SimpleGrid>
    </>
  )
}

ListOfArticles.propTypes = {
  title: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired,
}

export default ListOfArticles
