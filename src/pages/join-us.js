import React from "react"
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Heading,
  Alert,
  AlertIcon,
} from "@chakra-ui/react"
import Layout from "../components/layout"
import SEO from "../components/seo"
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
const JoinUsPage = () => {
  const [state, setState] = React.useState({})
  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => (
        <Alert status="success" variant="left-accent" colorScheme="linkedin">
          <AlertIcon />
          شكرا لك 🌷
        </Alert>
      ))
      .catch(error => alert(error))
  }
  return (
    <Layout>
      <SEO title="الانضمام للنادي" />
      <Heading as="h1">انضم للنادي</Heading>
      <Box p={8}>
        <form
          method="POST"
          data-netlify="true"
          action="/شكرا لك 🌷/"
          netlify-honeypot="bot-field"
          name="join-us"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <FormControl isRequired>
            <FormLabel htmlFor="name">اسمك الكريم</FormLabel>
            <Input
              type="text"
              placeholder="Name"
              name="Name"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Email">إيميلك الجامعي</FormLabel>
            <Input
              type="email"
              placeholder="Email"
              name="Email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Mobile number">رقم جوالك</FormLabel>
            <Input
              type="tel"
              placeholder="Mobile number"
              name="Mobile number"
              onChange={handleChange}
            />
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
