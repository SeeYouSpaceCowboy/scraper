import React from 'react'

const Result = props => (
  <div className="result">
    <p>{ props.tag }</p>
    <h1><a href={ props.link } target="_blank" rel="noopener noreferrer">{ props.content }</a></h1>
  </div>
)

export default Result
