export default function scrapeReducer(state = { urls : {} }, action) {
  switch(action.type) {
    case 'FETCH_URLS':
    case 'SCRAPE':
      return { ...state, urls: action.payload }
    default: return state
  }
}
