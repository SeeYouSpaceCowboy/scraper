import React from 'react'

const SearchBox = props => {
  return (
    <div>
      <input className="url-box" type="text" name="url" placeholder="Type in a url you want to scrape. . ." onChange={ onChange }/>
      <button type="button" name="search" onClick={ onClick }>Scrape</button>
    </div>
  )

  function onClick(e) {
    props.searchClick(e)
  }

  function onChange(e) {
    props.searchChange(e)
  }
}

export default SearchBox
