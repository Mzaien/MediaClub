import React from "react"
import PropTypes from "prop-types"
import { FiTwitter } from "react-icons/fi"
import { RiWhatsappLine, RiTelegramLine } from "react-icons/ri"
import { HStack, Tooltip, chakra, IconButton } from "@chakra-ui/react"
import {
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share"

const ShareList = ({ url, title, twitterUsername }) => {
  const Whatsapp = chakra(WhatsappShareButton)
  const Telegram = chakra(TelegramShareButton)
  const Twitter = chakra(TwitterShareButton)
  const twitterVia = twitterUsername.replace("@", "")

  return (
    <HStack spacing={2} justify="center" my="4">
      <Tooltip label="أرسل للواتس اب" aria-label="المشاركة على واتساب">
        <Whatsapp url={url} title={title}>
          <IconButton
            aria-label="أرسل للواتساب"
            icon={<RiWhatsappLine size={24} />}
          />
        </Whatsapp>
      </Tooltip>
      <Tooltip label="أرسل لتويتر" aria-label="المشاركة على تويتر">
        <Twitter url={url} title={title} via={twitterVia}>
          <IconButton aria-label="أرسل لتويتر" icon={<FiTwitter size={24} />} />
        </Twitter>
      </Tooltip>
      <Tooltip label="أرسل لتلقرام" aria-label="المشاركة على تلقرام">
        <Telegram url={url} title={title}>
          <IconButton
            aria-label="أرسل لتلقرام"
            icon={<RiTelegramLine size={24} />}
          />
        </Telegram>
      </Tooltip>
    </HStack>
  )
}

ShareList.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  twitterUsername: PropTypes.string.isRequired,
}

export default ShareList
