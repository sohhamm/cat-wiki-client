import {fetcher, URL} from '../utils'

export const getAllBreeds = async () => {
  return await fetcher(URL)
}

export const getSearchedBreeds = async (query: string) => {
  return await fetcher(`${URL}/search?q=${query}`)
}

export const getBreedByID = async (id: string) => {
  return await fetcher(`${URL}/${id}`)
}

export const incrementSearchCount = async (searchQuery: string) => {
  return await fetcher(`${URL}/top-breeds`, 'post', {name: searchQuery})
}
