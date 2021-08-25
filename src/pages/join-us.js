import React from "react"
import {
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Heading,
  chakra,
  Select,
  CheckboxGroup,
  Checkbox,
  SimpleGrid,
} from "@chakra-ui/react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import YouTubePlayer from "react-player/youtube"
const JoinUsPage = () => {
  const FORMSPARK_ACTION_URL = "https://submit-form.com/yiVEQZ6W"
  // const FORMSPARK_ACTION_URL = "https://submit-form.com/AK4r0KN7"
  const YT_VID_URL =
    "https://www.youtube.com/watch?time_continue=7&v=VN-1_JmSjFw&feature=emb_title"
  const ChakraYTPlayer = chakra(YouTubePlayer)
  return (
    <Layout>
      <Seo title="الانضمام للنادي" />
      <Heading as="h1"> 🚀 انضم للنادي</Heading>
      <ChakraYTPlayer
        mt={4}
        url={YT_VID_URL}
        width="100% !important"
        height={{
          base: "250px !important",
          lg: "500px !important",
        }}
        playing
        config={{
          youtube: {
            playerVars: {
              rel: 0,
            },
          },
        }}
        controls
      />
      <Box p={8}>
        <form method="POST" action={FORMSPARK_ACTION_URL}>
          <input
            type="hidden"
            name="_redirect"
            value="https://media-club.vercel.app/%D8%B4%D9%83%D8%B1%D8%A7/"
          />
          <FormControl isRequired>
            <FormLabel htmlFor="name">الاسم الثلاثي</FormLabel>
            <Input type="text" placeholder="عبدالله خالد السلطان" name="name" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="student id">رقمك الجامعي</FormLabel>
            <Input
              type="number"
              placeholder="202153450"
              minlength="9"
              name="student id"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="Mobile number">رقم جوالك</FormLabel>
            <Input
              type="tel"
              placeholder="+966590177070"
              name="mobile number"
              minlength="10"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="major">التخصص</FormLabel>
            <Input name="major" type="text" placeholder="هندسة برمجيات" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="housing">هل لديك سكن في الجامعة ؟</FormLabel>
            <Select name="housing">
              <option name="housing" value="yes">
                نعم
              </option>
              <option name="housing" value="no">
                لا
              </option>
              <option name="housing" value="soon">
                في الطريق
              </option>
            </Select>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="Skills">المهارة التي تمتلكها</FormLabel>
            <CheckboxGroup
              colorScheme="green"
              // defaultValue={["naruto", "kakashi"]}
              name="skills"
            >
              <SimpleGrid columns={[2, 3, 4]} spacing={2}>
                <Checkbox name="skills" value="التفكير الإبداعي">
                  التفكير الإبداعي
                </Checkbox>
                <Checkbox name="skills" value="الإدارة والمتابعة">
                  الإدارة والمتابعة
                </Checkbox>
                <Checkbox name="skills" value="التسويق">
                  التسويق
                </Checkbox>
                <Checkbox name="skills" value="الإخراج">
                  الإخراج
                </Checkbox>
                <Checkbox name="skills" value="التقنية والدعم الفني">
                  التقنية والدعم الفني
                </Checkbox>
                <Checkbox name="skills" value="التنظيم وإدارة اللقاءات">
                  التنظيم وإدارة اللقاءات
                </Checkbox>
                <Checkbox name="skills" value="العلاقات العامة">
                  العلاقات العامة
                </Checkbox>
                <Checkbox name="skills" value="تصميم الموشن جرافيك">
                  تصميم الموشن جرافيك
                </Checkbox>
                <Checkbox name="skills" value="تصميم الانفوجرافيك">
                  تصميم الانفوجرافيك
                </Checkbox>
                <Checkbox name="skills" value="التصميم بالفوتوشوب">
                  التصميم بالفوتوشوب
                </Checkbox>
                <Checkbox name="skills" value="المونتاج">
                  المونتاج
                </Checkbox>
                <Checkbox name="skills" value="التحرير">
                  التحرير
                </Checkbox>
                <Checkbox name="skills" value="التدقيق اللغوي">
                  التدقيق اللغوي
                </Checkbox>
                <Checkbox name="skills" value="الإعداد وكتابة المحتوى">
                  الإعداد وكتابة المحتوى
                </Checkbox>
                <Checkbox name="skills" value="التقديم">
                  التقديم
                </Checkbox>
                <Checkbox name="skills" value="التعليق الصوتي">
                  التعليق الصوتي
                </Checkbox>
                <Checkbox name="skills" value="التصوير الفيديوغرافي">
                  التصوير الفيديوغرافي
                </Checkbox>
                <Checkbox name="skills" value="التصوير الفوتوغرافي">
                  التصوير الفوتوغرافي
                </Checkbox>
                <Checkbox name="skills" value="انتاج انيميشن">
                  انتاج انيميشن
                </Checkbox>
              </SimpleGrid>
            </CheckboxGroup>
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
