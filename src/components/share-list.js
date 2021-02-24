import React from "react"
import { FiTwitter, FiMail, FiCopy } from "react-icons/fi"
import { RiWhatsappLine, RiTelegramLine } from "react-icons/ri"
import { HStack, IconButton, Tooltip } from "@chakra-ui/react"
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
          <IconButton
            aria-label="أرسل للواتساب"
            icon={<RiWhatsappLine size={24} />}
          />
        </WhatsappShareButton>
      </Tooltip>
      <Tooltip label="أرسل لتلقرام" aria-label="A tooltip">
        <TelegramShareButton url={url} subject={title.text}>
          <IconButton
            aria-label="أرسل لتلقرام"
            icon={<RiTelegramLine size={24} />}
          />
        </TelegramShareButton>
      </Tooltip>
      <Tooltip label="أرسل لتويتر" aria-label="A tooltip">
        <TwitterShareButton url={url} subject={title.text}>
          <IconButton aria-label="أرسل لتويتر" icon={<FiTwitter size={24} />} />
        </TwitterShareButton>
      </Tooltip>
      <Tooltip label="أرسل بالايميل" aria-label="A tooltip">
        <EmailShareButton url={url} subject={title.text}>
          <IconButton aria-label="أرسل بالايميل" icon={<FiMail size={24} />} />
        </EmailShareButton>
      </Tooltip>
      <Tooltip label="إنسخ الرابط" aria-label="A tooltip">
        <IconButton
          aria-label="إنسخ الرابط"
          icon={<FiCopy size={24} />}
          onClick={() => {
            navigator.clipboard.writeText(url)
          }}
        />
      </Tooltip>
    </HStack>
  )
}
