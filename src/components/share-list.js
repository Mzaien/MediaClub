import React from "react"
import { FiTwitter, FiMail, FiCopy } from "react-icons/fi"
import { RiWhatsappLine, RiTelegramLine } from "react-icons/ri"
import { HStack, Tooltip, chakra, IconButton } from "@chakra-ui/react"
import {
  EmailShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"

export default function sharelist({ url, title }) {
  const Whatsapp = chakra(WhatsappShareButton)
  const Telegram = chakra(TelegramShareButton)
  const Twitter = chakra(TwitterShareButton)
  const Email = chakra(EmailShareButton)
  return (
    <HStack spacing={4} justify="center" my="4">
      <Tooltip label="أرسل للواتس اب" aria-label="A tooltip">
        <Whatsapp url={url} subject={title.text}>
          <IconButton
            aria-label="أرسل للواتساب"
            icon={<RiWhatsappLine size={24} />}
          />
        </Whatsapp>
      </Tooltip>
      <Tooltip label="أرسل لتلقرام" aria-label="A tooltip">
        <Telegram url={url} subject={title.text}>
          <IconButton
            aria-label="أرسل لتلقرام"
            icon={<RiTelegramLine size={24} />}
          />
        </Telegram>
      </Tooltip>
      <Tooltip label="أرسل لتويتر" aria-label="A tooltip">
        <Twitter url={url} subject={title.text}>
          <IconButton aria-label="أرسل لتويتر" icon={<FiTwitter size={24} />} />
        </Twitter>
      </Tooltip>
      <Tooltip label="أرسل بالايميل" aria-label="A tooltip">
        <Email url={url} subject={title.text}>
          <IconButton aria-label="أرسل بالايميل" icon={<FiMail size={24} />} />
        </Email>
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
