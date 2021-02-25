import React from "react"
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react"
import { navigate } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// function encode(data) {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&")
// }
const JoinUsPage = () => {
  // const [state, setState] = React.useState({})
  // const handleChange = e => {
  //   setState({ ...state, [e.target.name]: e.target.value })
  // }
  const FORMSPARK_ACTION_URL = "https://submit-form.com/yiVEQZ6W"

  const handleSubmit = e => {
    e.preventDefault()
    navigate("شكرا")
  }
  return (
    <Layout>
      <SEO title="الانضمام للنادي" />
      <Heading as="h1">انضم للنادي</Heading>
      <Box p={8}>
        <form method="POST" action={FORMSPARK_ACTION_URL}>
          <input type="hidden" name="form-name" value="contact" />
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
          <Button
            aria-label="أرسل"
            mt={4}
            colorScheme="linkedin"
            type="submit"
            onSubmit={handleSubmit}
          >
            أرسل
          </Button>
        </form>
      </Box>
    </Layout>
  )
}

export default JoinUsPage
