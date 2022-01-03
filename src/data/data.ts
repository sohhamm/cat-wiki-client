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
  return await fetcher(`${URL}/top-breeds`, 'post', {id: searchQuery})
}

export const getMostPopularBreeds = async (limit?: number) => {
  return await fetcher(`${URL}/top-breeds?limit=${limit}`)
}
