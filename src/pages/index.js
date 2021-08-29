import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Logos from "../components/logos"
import Seo from "../components/seo"
import Recomannded from "../components/recomannded"
import { Button, Flex, Text } from "@chakra-ui/react"
import illus from "../images/Saly-19.svg"
const IndexPage = ({ data }) => {
  const {
    postsQuery: { nodes: recentPosts },
  } = data

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
      <img
        src={illus}
        alt="illus"
        loading="lazy"
        style={{
          position: "static",
          width: "50%",
          height: "50%",
          margin: "0 auto",
        }}
      />
      <Flex justifyContent="center" marginTop={"12"}>
        <Button
          marginX={4}
          bg="#1DA1F2"
          as={Link}
          to={`/join-us`}
          _hover={{
            transform: "scale(1.4)",
            transition: "all 0.2s ease-in-out",
            bg: "#1DA1F2",
          }}
        >
          انظم للنادي
        </Button>
      </Flex>
      <Flex justifyContent="center" marginTop={"12"} align="center">
        <Text fontSize="1.5rem">
          نادي ثاني في الجامعة ؟ ودكم تشاركوا محتواكم الفخم؟{" "}
          <Link style={{ color: "#1DA1F2" }} to={`/contact-us`}>
            حياكم 🤝
          </Link>
        </Text>
      </Flex>
      <Logos />
      <Recomannded recommendedPosts={recentPosts} title="جديدنا" noline />
    </Layout>
  )
}

export const query = graphql`
  {
    postsQuery: allPrismicPost(
      sort: { fields: first_publication_date, order: DESC }
      limit: 4
    ) {
      nodes {
        ...PostTag
        ...PostCard
      }
    }
  }
`

export default IndexPage
