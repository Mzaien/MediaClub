import React from "react"
import PropTypes from "prop-types"
import { Heading, SimpleGrid } from "@chakra-ui/react"
import PostCard from "./post-card"

const ListOfPosts = ({ title, posts }) => {
  return (
    <section>
      <Heading as="h2" my={6}>
        {title}
      </Heading>
      <SimpleGrid>
        {posts.map(post => {
          return <PostCard key={post.id} post={post} />
        })}
      </SimpleGrid>
    </section>
  )
}

ListOfPosts.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
}

export default ListOfPosts
