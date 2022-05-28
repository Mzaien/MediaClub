import { Heading } from "@chakra-ui/react"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
export default function thanks() {
  return (
    <Layout>
      <Seo title="الانضمام للنادي" />
      <Heading as="h1" p={[4, 8]} textAlign="center" my={16}>
        شكرا لك <span>🌷</span> سنتواصل قريبا
      </Heading>
    </Layout>
  )
}
