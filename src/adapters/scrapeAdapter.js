import axios from 'axios'

// const dev_url = 'http://localhost:3000/v1'
const url = 'https://api-scraper.herokuapp.com/v1'

axios.defaults.baseURL = url

export const scrapeAdapter = {
  fetchUrls: () => {
    return axios.get('urls')
      .then(response => response.data)
      .catch(error => error)
  },

  scrapeUrl: url => {
    return axios.post('urls', url)
      .then(response => response.data)
      .catch(error => error)
  }
}
