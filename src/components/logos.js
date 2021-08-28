import React from "react"
import {
  Box,
  SimpleGrid,
  Heading,
  useColorMode,
  SlideFade,
} from "@chakra-ui/react"
import logo1 from "../images/هنيهة.png"
import logo2 from "../images/ayat.png"
import logo4 from "../images/SAJLATn.png"
import logo5 from "../images/trikat.png"
import logo6 from "../images/sandwich.png"
import { Link } from "gatsby"
export default function Logos() {
  const { colorMode } = useColorMode()
  return (
    <SlideFade
      in={true}
      offsetY="20px"
      offsetX="90px"
      transition={{
        delay: 1,
        x: { type: "spring", stiffness: 100 },
        default: { duration: 2 },
      }}
    >
      <Heading as="h2" fontSize="2xl" fontWeight="bold" mt={16}>
        برامجنا
      </Heading>
      <SimpleGrid
        id="ourapps"
        mx={4}
        gap={4}
        mt={4}
        columns={[1, 2, 3]}
        justifyItems="center"
        justifyContent="space-evenly"
        alignContent="space-evenly"
        alignItems="center"
      >
        <Link to="podcast/بودكاست-هُنيهة">
          <Box
            padding={4}
            borderRadius={12}
            zoom={1}
            as="img"
            src={logo1}
            bg={colorMode === "dark" ? "whitesmoke" : "transparent"}
            border="8px"
            borderColor="teal.400"
            boxSize="200px"
            objectFit="contain"
          />
        </Link>
        <Link to="podcast/إذاعة-آيات">
          <Box
            padding={4}
            borderRadius={12}
            as="img"
            src={logo2}
            bg={colorMode === "dark" ? "whitesmoke" : "transparent"}
            border="8px"
            borderColor="teal.400"
            boxSize="200px"
            objectFit="contain"
          />
        </Link>
        <Link to="podcast/بودكاست-سجلات">
          <Box
            padding={4}
            borderRadius={12}
            as="img"
            src={logo4}
            bg={colorMode === "dark" ? "whitesmoke" : "transparent"}
            border="8px"
            borderColor="teal.400"
            boxSize="200px"
            objectFit="cover"
          />
        </Link>
        <Link to="podcast/بودكاست-تركات-جامعية">
          <Box
            padding={4}
            borderRadius={12}
            as="img"
            src={logo5}
            bg={colorMode === "dark" ? "whitesmoke" : "transparent"}
            border="8px"
            borderColor="teal.400"
            boxSize="200px"
            objectFit="cover"
          />
        </Link>
        <Link to="podcast/بودكاست-ساندويتش-التخصصات">
          <Box
            padding={4}
            borderRadius={12}
            as="img"
            src={logo6}
            bg={colorMode === "dark" ? "whitesmoke" : "transparent"}
            border="8px"
            borderColor="teal.400"
            boxSize="200px"
            objectFit="contain"
          />
        </Link>
        <Box paddingY={16} borderRadius={12} as="h3" textAlign="center">
          والكثير من البرامج الأخرى🚀
        </Box>
      </SimpleGrid>
    </SlideFade>
  )
}
