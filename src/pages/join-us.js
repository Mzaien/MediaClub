import React from "react"
import {
  FormErrorMessage,
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
  return (
    <Layout>
      <SEO title="الانضمام للنادي" />
      <Heading as="h1">انضم للنادي</Heading>
      <Box p={8}>
        <form method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <FormControl isRequired>
            <FormLabel htmlFor="name">اسمك الكريم</FormLabel>
            <Input type="text" placeholder="Name" name="Name" />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Email">إيميلك الجامعي</FormLabel>
            <Input type="text" placeholder="Email" name="Email" />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Mobile number">رقم جوالك</FormLabel>
            <Input
              type="tel"
              placeholder="Mobile number"
              name="Mobile number"
            />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <Button mt={4} colorScheme="linkedin" type="submit">
            أرسل
          </Button>
        </form>
      </Box>
    </Layout>
  )
}

export default JoinUsPage
