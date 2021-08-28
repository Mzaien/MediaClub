import React from "react"
import { Heading, SimpleGrid, useColorMode } from "@chakra-ui/react"
import PostRecommended from "./post-recommended-card"
function Recomannded({ recommendedPosts }) {
  const { colorMode } = useColorMode()
  return (
    <section>
      <Heading
        as="h3"
        py={5}
        mt={10}
        borderTop={colorMode === "dark" ? "3px solid white" : "3px solid black"}
      >
        مواضيع مشابهة
      </Heading>
      <SimpleGrid minChildWidth="18rem" spacing={5}>
        {recommendedPosts.map(post => (
          <PostRecommended
            key={post.id}
            title={post.data.title.text}
            postImage={post.data.main_image.url}
            postPath={post.postPath}
          />
        ))}
      </SimpleGrid>
    </section>
  )
}

export default Recomannded