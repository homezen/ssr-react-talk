// Source:  ReactTraining/react-router
//          https://goo.gl/liX0Zd
import React from 'react'
import {
  renderToString,
} from 'react-dom/server'

import {
  match, RouterContext, Router, Route,
} from 'react-router'

const App = ({...props}) => (
  <div>{/* App-y Stuff */}</div>
)

const routes = (
  <Router>
    <Route path="/" component={App} />
  </Router>
)

serve((req, res) => {
  // req.url = full URL path
  // including the query string
  match(
    { routes, location: req.url },
    (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(
          302,
          redirectLocation.pathname + redirectLocation.search
        )
      } else if (renderProps) {
        res.status(200).send(
          renderToString(
            <RouterContext {...renderProps} />
        ))
      } else {
        res.status(404).send('Not found')
      }
    }
  )
})
