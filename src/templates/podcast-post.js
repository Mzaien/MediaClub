import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "@chakra-ui/react"

const PodcastPostTemplate = () => {
  return (
    <Layout>
      <SEO title="عنوان مؤقت" />
      <Container maxW="md">
        <div>هذا القالب الخاص بعرض المشاركات</div>
      </Container>
    </Layout>
  )
}

export default PodcastPostTemplate
