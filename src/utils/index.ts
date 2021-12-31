import {FetcherType} from '../types'

export const URL = `${import.meta.env.VITE_APP_URL}/api/cats`

export const fetcher: FetcherType = async (url, method = 'GET', payload) => {
  try {
    const data = await (
      await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
    ).json()
    return data
  } catch (err) {
    console.error(err)
  }
}
