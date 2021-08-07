import React from "react"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  IconButton,
  useDisclosure,
  useColorMode,
} from "@chakra-ui/react"
import { FiSearch } from "react-icons/fi"
import AlgoliaSearch from "./algolia"

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
            <AlgoliaSearch />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
