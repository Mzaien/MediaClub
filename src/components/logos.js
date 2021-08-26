import React from "react"
import { Box, SimpleGrid, Heading } from "@chakra-ui/react"
import logo1 from "../images/هنيهة.png"
import logo2 from "../images/ayat.png"
import logo3 from "../images/ediah.png"
import logo4 from "../images/SAJLATn.png"
import logo5 from "../images/trikat.png"
import logo6 from "../images/sandwich.png"
import { Link } from "gatsby"
export default function logos() {
  return (
    <>
      <Heading as="h2" fontSize="2xl" fontWeight="bold" mt={16}>
        برامجنا
      </Heading>
      <SimpleGrid
        id="ourapps"
        mx={4}
        gap={4}
        mt={4}
        columns={[1, 2, 3, 4]}
        justifyItems="center"
        justifyContent="space-evenly"
        alignContent="space-evenly"
        alignItems="center"
      >
        <Link to="podcast/هنيهة">
          <Box
            padding={4}
            borderRadius={8}
            boxSize={"185px"}
            as="img"
            src={logo1}
            bg="whiteAlpha.600"
          />
        </Link>
        <Link to="podcast/آيات/">
          <Box
            padding={4}
            borderRadius={8}
            boxSize={"185px"}
            as="img"
            src={logo2}
            bg="whiteAlpha.600"
          />
        </Link>
        <Link to="podcast/سجلات/">
          <Box
            padding={4}
            borderRadius={8}
            boxSize={"185px"}
            as="img"
            src={logo4}
            bg="whiteAlpha.600"
          />
        </Link>
        <Link to="podcast/تركات-جامعية/">
          <Box
            padding={4}
            borderRadius={8}
            boxSize={"185px"}
            as="img"
            src={logo5}
            bg="whiteAlpha.600"
          />
        </Link>
        <Link to="podcast/ساندويتش-التخصصات">
          <Box
            padding={4}
            borderRadius={8}
            boxSize={"185px"}
            as="img"
            src={logo6}
            bg="whiteAlpha.600"
          />
        </Link>
        <Box
          padding={4}
          borderRadius={8}
          boxSize={"185px"}
          as="h3"
          bg="whiteAlpha.600"
          textAlign="center"
          alignSelf="center"
          alignContent="center"
          alignItems="center"
        >
          🚀 والكثير من البرامج الأخرى
        </Box>
      </SimpleGrid>
    </>
  )
}
