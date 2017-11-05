import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUrls, scrapeUrl } from '../../actions/scrapeActions'
import SearchBox from './components/SearchBox'
import Result from './components/Result'

class Scraper extends Component {
  constructor() {
    super()

    this.state = {
      url: ''
    }

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  render() {
    let urls = this.props.urls.urls[this.props.urls.urls.length-1]
    if(!urls) {
      return (
        <div className="container">
          <SearchBox searchClick={ this.onClick } searchChange={ this.onChange }/>
        </div>
      )
    }

    return (
      <div className="container">
        <SearchBox searchClick={ this.onClick } searchChange={ this.onChange }/>
        <div className="result">
          <h2><a href={ urls.link } target="_blank" rel="noopener noreferrer">{ urls.link }</a></h2>
        </div>
        <div className="results-container">
          {
            urls.h1.map((h1, i) => <Result key={ i } tag="h1" link={ h1.link } content={ h1.content }/>)
          }

          {
            urls.h2.map((h2, i) => <Result key={ i } tag="h2" link={ h2.link } content={ h2.content }/>)
          }

          {
            urls.h3.map((h3, i) => <Result key={ i } tag="h3" link={ h3.link } content={ h3.content }/>)
          }

          {
            urls.a.map((a, i) => <Result key={ i } tag="a" link={ a.link } content={ a.content }/>)
          }
        </div>
      </div>
    )
  }

  componentWillMount() {
    this.props.fetchUrls()
  }

  onClick(e) {
    let url = this.state.url
    this.props.scrapeUrl(url)
  }

  onChange(e) {
    let field = e.target.name
    let value = e.target.value
    let url = this.state
    url[field] = value
    this.setState({ url })
    console.log(value)
  }
}

const mapStateToProps = state => {
  return { urls: state.scrape }
}

const mapDispatchToState = dispatch => {
  return {
    scrapeUrl: url => {
      let action = scrapeUrl(url)
      dispatch(action)
    },
    fetchUrls: () => {
      let action = fetchUrls()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToState)(Scraper)
