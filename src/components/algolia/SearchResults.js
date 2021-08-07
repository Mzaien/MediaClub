import React from "react"
import { List, ListItem } from "@chakra-ui/react"
import { connectHits } from "react-instantsearch-dom"
import SearchHit from "./SearchHit"

const SearchResults = props => {
  const { hits } = props

  return (
    <List>
      {hits.map(hit => (
        <ListItem key={hit.objectId}>
          <SearchHit hit={hit} />
        </ListItem>
      ))}
    </List>
  )
}

export default connectHits(SearchResults)
