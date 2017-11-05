import { scrapeAdapter } from '../adapters/scrapeAdapter'

export const fetchUrls = () => {
  const response = scrapeAdapter.fetchUrls()

  return {
    type: 'FETCH_URLS',
    payload: response
  }
}

export const scrapeUrl = url => {
  const response = scrapeAdapter.scrapeUrl(url)

  return {
    type: 'SCRAPE',
    payload: response
  }
}
