import React from "react"
import { FiTwitter, FiMail, FiCopy } from "react-icons/fi"
import { RiWhatsappLine, RiTelegramLine } from "react-icons/ri"
import { Button, HStack, Icon, Tooltip } from "@chakra-ui/react"
import {
  EmailShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"

export default function sharelist({ url, title }) {
  return (
    <HStack spacing={4} justify="center" my="4">
      <Tooltip label="أرسل للواتس اب" aria-label="A tooltip">
        <WhatsappShareButton url={url} subject={title.text}>
        <Button boxSize={10} >
          <Icon aria-label="أرسل للواتساب" as={RiWhatsappLine} boxSize={6} />
          </Button>
        </WhatsappShareButton>
      </Tooltip>
      <Tooltip label="أرسل لتلقرام" aria-label="A tooltip">
        <TelegramShareButton url={url} subject={title.text}>
        <Button boxSize={10} >
          <Icon aria-label="أرسل لتلقرام" as={RiTelegramLine} boxSize={6} />
          </Button>
        </TelegramShareButton>
      </Tooltip>
      <Tooltip label="أرسل لتويتر" aria-label="A tooltip">
        <TwitterShareButton url={url} subject={title.text}>
        <Button boxSize={10} >
          <Icon aria-label="أرسل لتويتر" as={FiTwitter} boxSize={6} />
          </Button>
        </TwitterShareButton>
      </Tooltip>
      <Tooltip label="أرسل بالايميل" aria-label="A tooltip">
        <EmailShareButton url={url} subject={title.text}>
          <Button boxSize={10} >
            <Icon aria-label="أرسل بالايميل" as={FiMail} boxSize={6} />
          </Button>
        </EmailShareButton>
      </Tooltip>
      <Tooltip label="إنسخ الرابط" aria-label="A tooltip">
        <Button boxSize={10} >
          <Icon
            aria-label="إنسخ الرابط"
            boxSize={6}
            as={FiCopy}
            onClick={() => {
              navigator.clipboard.writeText(url)
            }}
          />
        </Button>
      </Tooltip>
    </HStack>
  )
}
