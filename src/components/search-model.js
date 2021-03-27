import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  useDisclosure,
  useColorMode,
  Box,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react"
import { Link } from "gatsby"
import { FiSearch } from "react-icons/fi"
export default function Search() {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { colorMode } = useColorMode()
  const initialRef = React.useRef()
  const finalRef = React.useRef()

  return (
    <>
      <IconButton
        aria-label="ابحث في الموقع"
        icon={
          <FiSearch
            color={colorMode === "dark" ? "white" : "black"}
            fontSize="6xl"
          />
        }
        colorScheme="whiteAlpha"
        mx={[1, 2]}
        onClick={onOpen}
      />
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>إبحث في موقع النادي</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>كلمة البحث</FormLabel>
              <Flex>
                <Input ref={initialRef} placeholder="إذاعة القران" />
                <IconButton
                  aria-label="ابحث في الموقع"
                  icon={
                    <FiSearch
                      color={colorMode === "dark" ? "white" : "black"}
                      fontSize="6xl"
                    />
                  }
                  colorScheme="whiteAlpha"
                  mx={[1, 2]}
                  // onClick={onOpen}
                />
              </Flex>
            </FormControl>
          </ModalBody>
          <SimpleGrid mx={8} spacing="4" columns={1}>
            <Box
              as={Link}
              to={"/"}
              p={4}
              borderRadius="md"
              height="16"
              border="2px"
              _hover={{
                background: "teal.400",
                // color: "teal.50",
              }}
              borderColor="teal.300"
            >
              secondaryNavLinks
            </Box>
            <Box
              p={4}
              height="16"
              borderRadius="md"
              border="2px"
              borderColor="teal.300"
            >
              dasdasjdkl
            </Box>
            <Box
              p={4}
              height="16"
              borderRadius="md"
              border="2px"
              borderColor="teal.300"
            >
              secondaryNavLinks
            </Box>
            <Box
              p={4}
              height="16"
              borderRadius="md"
              border="2px"
              borderColor="teal.300"
            >
              secondaryNavLinks
            </Box>
            <Box
              p={4}
              height="16"
              borderRadius="md"
              border="2px"
              borderColor="teal.300"
            >
              secondaryNavLinks
            </Box>
            <Box
              p={4}
              height="16"
              borderRadius="md"
              border="2px"
              borderColor="teal.300"
            >
              secondaryNavLinks
            </Box>
            <Box
              p={4}
              height="16"
              borderRadius="md"
              border="2px"
              borderColor="teal.300"
            >
              secondaryNavLinks
            </Box>
            <Box
              p={4}
              height="16"
              borderRadius="md"
              border="2px"
              borderColor="teal.300"
            >
              secondaryNavLinks
            </Box>
            <Box
              p={4}
              height="16"
              borderRadius="md"
              border="2px"
              borderColor="teal.300"
            >
              secondaryNavLinks
            </Box>
            <Box
              p={4}
              height="16"
              borderRadius="md"
              border="2px"
              borderColor="teal.300"
            >
              secondaryNavLinks
            </Box>
          </SimpleGrid>
          <ModalFooter justifyContent="flex-start">
            {/* <Button colorScheme="blue" mr={3}>
              إبحث
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
