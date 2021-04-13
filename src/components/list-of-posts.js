import React from "react"
import PropTypes from "prop-types"
import { Heading, SimpleGrid } from "@chakra-ui/react"
import PostCard from "./post-card"

const ListOfPosts = ({ title, posts, columns = 1 }) => {
  return (
    <section>
      {title && (
        <Heading as="h1" my={6}>
          {title}
        </Heading>
      )}
      <SimpleGrid columns={[1, null, columns]} gap={[1, null, columns * 2]}>
        {posts.map(post => {
          return (
            <PostCard key={post.id} post={post} isVertical={columns >= 2} />
          )
        })}
      </SimpleGrid>
    </section>
  )
}

ListOfPosts.propTypes = {
  title: PropTypes.string,
  posts: PropTypes.array.isRequired,
  columns: PropTypes.number,
}

export default ListOfPosts
