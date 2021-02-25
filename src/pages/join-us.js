import React from "react"
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react"
import Layout from "../components/layout"
import SEO from "../components/seo"
const JoinUsPage = () => {
  const FORMSPARK_ACTION_URL = "https://submit-form.com/yiVEQZ6W"
  return (
    <Layout>
      <SEO title="الانضمام للنادي" />
      <Heading as="h1">انضم للنادي</Heading>
      <Box p={8}>
        <form method="POST" action={FORMSPARK_ACTION_URL}>
          <input
            type="hidden"
            name="_redirect"
            value="https://media-club.vercel.app/%D8%B4%D9%83%D8%B1%D8%A7/"
          />
          <FormControl isRequired>
            <FormLabel htmlFor="name">اسمك الكريم</FormLabel>
            <Input type="text" placeholder="عبدالله السلطان" name="Name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Email">إيميلك الجامعي</FormLabel>
            <Input
              type="email"
              placeholder="s202053450@kfupm.edu.sa"
              name="Email"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Mobile number">رقم جوالك</FormLabel>
            <Input
              type="tel"
              placeholder="+966590177070"
              name="Mobile number"
            />
          </FormControl>
          <Button aria-label="أرسل" mt={4} colorScheme="linkedin" type="submit">
            أرسل
          </Button>
        </form>
      </Box>
    </Layout>
  )
}

export default JoinUsPage
