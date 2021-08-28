import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Logos from "../components/logos"
import Seo from "../components/seo"
// import Recomannded from "./components/recomannded"
import { Button, Flex } from "@chakra-ui/react"
const IndexPage = ({ data }) => {
  // const {
  //   postsQuery: { nodes: allPosts },
  // } = data

  return (
    <Layout>
      <Seo title="الصفحة الرئيسية" />
      <h1
        style={{ textAlign: "center", fontWeight: "bold", marginTop: "12px" }}
      >
        النادي الاعلامي{" "}
      </h1>
      <br />
      <br />
      <br />
      <h2 style={{ textAlign: "center" }}>
        {" "}
        رسول في خدمة الطلاب والجامعة والمجتمع
      </h2>
      <Flex justifyContent="center" marginTop={"12"}>
        {/* <Button marginX={4} as={Link} href="#ourapps">
          برامجنا
        </Button> */}
        <Button
          marginX={4}
          bg="#1DA1F2"
          // bgGradient="linear(to-r, #1DA1F2, #1DA1D1)"
          as={Link}
          to={`/join-us`}
          _hover={{
            transform: "scale(1.4)",
            transition: "all 0.2s ease-in-out",
            bg: "#1DA1F2",
          }}
        >
          حياك معنا 🤩
        </Button>
      </Flex>
      <Logos />
      {/* <Recomannded recommendedPosts={recommendedPosts} /> */}
    </Layout>
  )
}

export const query = graphql`
  {
    postsQuery: allPrismicPost(
      sort: { fields: first_publication_date, order: DESC }
      limit: 20
    ) {
      nodes {
        ...PostTag
        ...PostCard
      }
    }
  }
`

export default IndexPage
