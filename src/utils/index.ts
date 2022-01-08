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

export const allStats = [
  {
    label: 'Adaptability',
    key: 'adaptability',
  },
  {
    label: 'Affection Level',
    key: 'affection_level',
  },
  {
    label: 'Child Friendly',
    key: 'child_friendly',
  },
  {
    label: 'Grooming',
    key: 'grooming',
  },
  {
    label: 'Intelligence',
    key: 'intelligence',
  },
  {
    label: 'Health Issues',
    key: 'health_issues',
  },
  {
    label: 'Social Needs',
    key: 'social_needs',
  },
  {
    label: 'Stranger Friendly',
    key: 'stranger_friendly',
  },
]

export const descStats = [
  {
    label: 'Temperament',
    key: 'temperament',
  },
  {
    label: 'Origin',
    key: 'origin',
  },
  {
    label: 'Lifespan',
    key: 'life_span',
  },
]

export const getLimit = (width: number) => {
  switch (true) {
    case width > 532 && width < 680:
      return 5
    case width > 680 && width < 769:
      return 7
    case width < 640:
      return 3
    case width < 1120:
      return 1
    case width < 1500:
      return 3
    default:
      return 4
  }
}
