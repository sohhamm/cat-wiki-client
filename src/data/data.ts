import {fetcher, URL} from '../utils'

export const getAllBreeds = async () => {
  return await fetcher(URL)
}

export const getSearchedBreeds = async (query: string) => {
  return await fetcher(`${URL}/search?q=${query}`)
}