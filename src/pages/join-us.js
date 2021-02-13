import { useForm } from "react-hook-form"
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
import axios from "axios"
const JoinUsPage = () => {
  const { register, handleSubmit, errors } = useForm()
  const cors = "https://cors-anywhere.herokuapp.com/"
  const link = `https://docs.google.com/forms/d/e/1BahB7caIZvj3YA6EygyZtpDMtn7ACyrEjzaZTcXXijw/formResponse`
  const onSubmit = data => {
    const formData = new FormData(data.target)
    axios({
      url: `${cors}${link}`,
      method: "post",
      data: formData,
      responseType: "json",
    })
      .then(res => {
        console.log("response", res)
      })
      .catch(err => {
        console.log("err", err)
      })
    console.log(data)
  }
  return (
    <Layout>
      <SEO title="الانضمام للنادي" />
      <Heading as="h1">انضم للنادي</Heading>
      <Box p={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired>
            <FormLabel htmlFor="name">اسمك الكريم</FormLabel>
            <Input
              type="text"
              placeholder="Name"
              name="Name"
              ref={register({ required: true })}
            />
            <FormErrorMessage>
              {errors.Name && errors.Name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Email">إيميلك الجامعي</FormLabel>
            <Input
              type="text"
              placeholder="Email"
              name="Email"
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
            <FormErrorMessage>
              {errors.Email && errors.Email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Mobile number">رقم جوالك</FormLabel>
            <Input
              type="tel"
              placeholder="Mobile number"
              name="Mobile number"
              ref={register({ required: true, minLength: 6, maxLength: 13 })}
            />
            <FormErrorMessage>
              {errors.Mobile_number && errors.Mobile_number.message}
            </FormErrorMessage>
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
