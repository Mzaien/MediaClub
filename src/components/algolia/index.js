import React from "react"
import { FormControl, FormLabel, Flex } from "@chakra-ui/react"
import algoliasearch from "algoliasearch/lite"
import { InstantSearch, PoweredBy } from "react-instantsearch-dom"
import AlgoliaConfigure from "./Configure"
import SearchInput from "./SearchInput"
import indexName from "./indexName"
import SearchResults from "./SearchResults"

// Public information
const applicationId = "LMHDKJK5XR"
const searchKey = "9882868eab81366313f9b4cca4dbaffd"

const algoliaClient = algoliasearch(applicationId, searchKey)

const searchClient = {
  ...algoliaClient,
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      // if there is no query, don't make a request
      return
    }

    return algoliaClient.search(requests)
  },
}

const AlgoliaSearch = () => {
  return (
    <InstantSearch searchClient={searchClient} indexName={indexName}>
      <AlgoliaConfigure />
      <FormControl mb={8}>
        <FormLabel>كلمة البحث</FormLabel>
        <SearchInput />
      </FormControl>
      <SearchResults />
      <Flex justifyContent="flex-end" mt={6}>
        <PoweredBy
          translations={{
            searchBy: "",
          }}
        />
      </Flex>
    </InstantSearch>
  )
}

export default AlgoliaSearch
