import { combineReducers } from 'redux'
import scrapeReducer from './scrapeReducer'

const rootReducer = combineReducers({
  scrape: scrapeReducer
})

export default rootReducer
