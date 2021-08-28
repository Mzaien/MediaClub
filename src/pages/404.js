import React from "react"
import { Link } from "gatsby"
import { withUnpublishedPreview } from "gatsby-source-prismic"
import PostTemplate from "./post/{PrismicPost.prismicId}"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="الصفحة غير موجودة" />
    <h1>عذرا، الصفحة التي طلبتها غير موجودة</h1>
    <Link to="/">العودة إلى الصفحة الرئيسية</Link>,
  </Layout>
)

export default withUnpublishedPreview(NotFoundPage, {
  templateMap: {
    post: PostTemplate,
  },
})
