import React from "react"
import { Heading, SimpleGrid, useColorMode } from "@chakra-ui/react"
import PostRecommended from "./post-recommended-card"
function Recomannded({ recommendedPosts, title, noline, gridLayout }) {
  const { colorMode } = useColorMode()
  return (
    <section>
      <Heading
        as="h3"
        py={5}
        mt={10}
        borderTop={
          noline
            ? null
            : [colorMode === "dark" ? "3px solid white" : "3px solid black"]
        }
      >
        {title ? title : "مواضيع مشابهة"}
      </Heading>
      {!gridLayout ? (
        <SimpleGrid minChildWidth="18rem" spacing={5}>
          {recommendedPosts.map(post => {
            const {
              title,
              main_image,
              embed_link: { thumbnail_url },
            } = post.data

            const postImage = main_image.url || thumbnail_url

            return (
              <PostRecommended
                key={post.id}
                title={title.text}
                postImage={postImage}
                postPath={post.postPath}
              />
            )
          })}
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={[1, 2, 3]} spacing={5}>
          {recommendedPosts.map(post => {
            const {
              title,
              main_image,
              embed_link: { thumbnail_url },
            } = post.data

            const postImage = main_image.url || thumbnail_url

            return (
              <PostRecommended
                key={post.id}
                title={title.text}
                postImage={postImage}
                postPath={post.postPath}
              />
            )
          })}
        </SimpleGrid>
      )}
    </section>
  )
}

export default Recomannded
