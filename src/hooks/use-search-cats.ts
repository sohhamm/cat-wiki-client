import * as React from 'react'
import {getSearchedBreeds} from '../data/data'

type SearchCatsType = (searchText: string) => {
  searchResults: Array<any> | null
  isLoading: boolean
}

export const useSearchCats: SearchCatsType = searchText => {
  const [searchResults, setSearchResults] = React.useState<any[] | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    if (!searchText.length) return
    getSearchResults(searchText)
  }, [searchText])

  const getSearchResults = async (query: string) => {
    setIsLoading(true)
    const data = await getSearchedBreeds(query)
    setSearchResults(data)
    setIsLoading(false)
  }

  return {searchResults, isLoading}
}
