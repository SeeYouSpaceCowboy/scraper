import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './App'

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ App } />
  </Route>
)
