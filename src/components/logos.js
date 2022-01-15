import React from "react"
import {
  Box,
  SimpleGrid,
  Heading,
  useColorMode,
  SlideFade,
} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
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
            bg={colorMode === "dark" ? "whitesmoke" : "transparent"}
            border="8px"
            borderColor="teal.400"
            boxSize="200px"
            objectFit="contain"
          >
            <StaticImage
              src="../images/هنيهة.png"
              alt="برنامج هنيهة"
              placeholder="blurred"
              width={120}
              height={150}
            />
          </Box>
        </Link>
        <Link to="podcast/إذاعة-آيات">
          <Box
            padding={4}
            borderRadius={12}
            bg={colorMode === "dark" ? "whitesmoke" : "transparent"}
            border="8px"
            borderColor="teal.400"
            boxSize="200px"
            objectFit="contain"
          >
            <StaticImage
              src="../images/ayat.png"
              alt="برنامج ايات"
              placeholder="blurred"
              width={200}
              height={200}
            />
          </Box>
        </Link>
        <Link to="podcast/بودكاست-سجلات">
          <Box
            padding={4}
            borderRadius={12}
            bg={colorMode === "dark" ? "whitesmoke" : "transparent"}
            border="8px"
            borderColor="teal.400"
            boxSize="200px"
            objectFit="cover"
          >
            <StaticImage
              src="../images/SAJLATn.png"
              alt="برنامج سجلات"
              placeholder="blurred"
              width={200}
              height={200}
            />
          </Box>
        </Link>
        <Link to="podcast/بودكاست-تركات-جامعية">
          <Box
            padding={4}
            borderRadius={12}
            bg={colorMode === "dark" ? "whitesmoke" : "transparent"}
            border="8px"
            borderColor="teal.400"
            boxSize="200px"
            objectFit="cover"
          >
            <StaticImage
              src="../images/trikat.png"
              alt="برنامج تركات"
              placeholder="blurred"
              width={200}
              height={200}
            />
          </Box>
        </Link>
        <Link to="podcast/بودكاست-ساندويتش-التخصصات">
          <Box
            padding={4}
            borderRadius={12}
            bg={colorMode === "dark" ? "whitesmoke" : "transparent"}
            border="8px"
            borderColor="teal.400"
            boxSize="200px"
            objectFit="contain"
          >
            <StaticImage
              src="../images/sandwich.png"
              alt="برنامج ساندوش التخصصات"
              placeholder="blurred"
              width={200}
              height={200}
            />
          </Box>
        </Link>
        <Box paddingY={16} borderRadius={12} as="h3" textAlign="center">
          والكثير من البرامج الأخرى🚀
        </Box>
      </SimpleGrid>
    </SlideFade>
  )
}
