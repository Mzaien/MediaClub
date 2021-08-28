import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
} from "@chakra-ui/react"
import { RiTwitterFill, RiInstagramFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"
import { Link } from "gatsby"
const ContactUsPage = () => {
  const FORMSPARK_ACTION_URL = "https://submit-form.com/AK4r0KN7"
  return (
    <Layout>
      <Seo title="تواصل معنا" />
      <h1>تواصل معنا</h1>
      <section>
        عندك موضوع او سؤال مهم ؟ ابد خذ راحتك و اسألنا بهذا النموذج
      </section>
      <br />
      <form method="POST" action={FORMSPARK_ACTION_URL}>
        <input
          type="hidden"
          name="_redirect"
          value="https://media-club.vercel.app/%D8%B4%D9%83%D8%B1%D8%A7/"
        />
        <FormControl isRequired>
          <FormLabel htmlFor="name">إيميل التواصل</FormLabel>
          <Input type="email" placeholder="media@kfupm.edu.sa" name="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="student id">الرسالة</FormLabel>
          <Textarea placeholder="اود ...." minlength="30" name="message" />
        </FormControl>
        <Button aria-label="أرسل" mt={4} colorScheme="linkedin" type="submit">
          أرسل
        </Button>
      </form>
      <Stack
        isInline
        flexGrow="1"
        justifyContent="flex-end"
        spacing={5}
        justifyContent="center"
        mt="10"
      >
        <Link
          href={`https://twitter.com/MediaKfupm`}
          aria-label="حساب تويتر"
          target="_blank"
          rel="noopener"
        >
          <RiTwitterFill size="2.5rem" />
        </Link>
        <Link
          href={`https://www.instagram.com/MediaKfupm`}
          aria-label="حساب انستاقرام"
          target="_blank"
          rel="noopener"
        >
          <RiInstagramFill size="2.5rem" />
        </Link>
        <Link
          href={`mailto:MediaKfupm@gmail.com`}
          aria-label="الايميل"
          target="_blank"
          rel="noopener"
        >
          <MdEmail size="2.5rem" />
        </Link>
      </Stack>
    </Layout>
  )
}

export default ContactUsPage
