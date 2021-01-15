import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Heading } from "@chakra-ui/react"

const StyledShowcase = styled.section`
  background-color: #f3f3f3;
  height: 32rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="الصفحة الرئيسة" />
    <StyledShowcase>
      <Heading as="h1">مرحباً بكم في النادي الإعلامي</Heading>
      <Link to="/page-2">الصفحة الثانية</Link>
    </StyledShowcase>
  </Layout>
)

export default IndexPage
