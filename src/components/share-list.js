import React from "react"
import { FiTwitter, FiMail, FiCopy } from "react-icons/fi"
import { RiWhatsappLine, RiTelegramLine } from "react-icons/ri"
import { HStack, Icon, Tooltip } from "@chakra-ui/react"
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
          <Icon aria-label="أرسل للواتساب" as={RiWhatsappLine} boxSize={8} />
        </WhatsappShareButton>
      </Tooltip>
      <Tooltip label="أرسل لتلقرام" aria-label="A tooltip">
        <TelegramShareButton url={url} subject={title.text}>
          <Icon aria-label="أرسل لتلقرام" as={RiTelegramLine} boxSize={8} />
        </TelegramShareButton>
      </Tooltip>
      <Tooltip label="أرسل لتويتر" aria-label="A tooltip">
        <TwitterShareButton url={url} subject={title.text}>
          <Icon aria-label="أرسل لتويتر" as={FiTwitter} boxSize={8} />
        </TwitterShareButton>
      </Tooltip>
      <Tooltip label="أرسل بالايميل" aria-label="A tooltip">
        <EmailShareButton url={url} subject={title.text}>
          <Icon aria-label="أرسل بالايميل" as={FiMail} boxSize={8} />
        </EmailShareButton>
      </Tooltip>
      <Tooltip label="إنسخ الرابط" aria-label="A tooltip">
        <spacn>
          <Icon
            aria-label="إنسخ الرابط"
            boxSize={8}
            as={FiCopy}
            onClick={() => {
              navigator.clipboard.writeText(url)
            }}
          />
        </spacn>
      </Tooltip>
    </HStack>
  )
}
