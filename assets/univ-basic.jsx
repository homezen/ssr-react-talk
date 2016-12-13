// shared.js
import React from 'react'

const App = ({...props}) => (
  <div>{/* App-y Stuff */}</div>
)



// server.js
// import React from 'react'
import {
  renderToString,
} from 'react-dom/server'

const appAsString = renderToString(
  <App
    appPropOne='something'
    appPropTwo='something else' />
)

const markup = `
<html>
  <head>
    <title>Holiday App</title>
  </head>
  <body>
    <div id='react-target'>
      ${appAsString}
    </div>
    <script async src='./client.js' />
  </body>
</html>
`

console.log(markup)



// client.js
import {render} from 'react-dom'

if (typeof document !== 'undefined') {
  render(
    App,
    document.getElementById('react-target'),
  )
}


//
//
//
