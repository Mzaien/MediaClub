import { useForm } from "react-hook-form"
import React, { useState } from "react"
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
  const [Input, setInput] = useState({
    inputs: {
      name: { id: 2005620554, value: "" },
      email: { id: 1045781291, value: "" },
      phone: { id: 1166974658, value: null },
    },
  })
  const cors = "https://shrouded-earth-67675.herokuapp.com/"
  const link = `https://docs.google.com/forms/d/e/1FAIpQLSe0jE7c36Me40FX1Ir-NXAFhwA5VSIz2bqYPV0Bx7f47iv-EQ/formResponse`
  function handleChangename(e) {
    const { value } = e.target
    inputs[name].setInput(value)
  }
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
            <FormLabel htmlFor="name" onChange={handleChange()}>
              اسمك الكريم
            </FormLabel>
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
            <FormLabel htmlFor="Email" onChange={handleChange()}>
              إيميلك الجامعي
            </FormLabel>
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
            <FormLabel htmlFor="Mobile number" onChange={handleChange()}>
              رقم جوالك
            </FormLabel>
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
