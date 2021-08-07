import React from "react"
import { Input } from "@chakra-ui/react"
import { connectSearchBox } from "react-instantsearch-dom"

const SearchInput = ({ currentRefinement, refine }) => {
  return (
    <Input
      autoFocus
      type="search"
      placeholder="اكتب كلمة البحث هنا"
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
    />
  )
}

export default connectSearchBox(SearchInput)
