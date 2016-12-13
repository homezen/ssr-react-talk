import React from 'react'
import {
  renderToString,
} from 'react-dom/server'

import {verySpecificApiCall} from 'my-api'

const App = ({...props}) => (
  <div>{/* App-y Stuff */}</div>
)

async function serve(req, res) {
    const {someId} = req.cookies
    const props = await verySpecificApiCall(someId)
    const appAsString = renderToString(
        <App {...props} />
    )

    const serialState = JSON.stringify(props)

    const markup = `
<html>
  <head>
    <title>Holiday App</title>
    <script type='text/javascript'>
        window.__APP_DATA__ = JSON.parse('${serialState}')
    </script>
  </head>
  <body>
    <div id='react-target'>
      ${appAsString}
    </div>
    <script async src='./client.js' />
  </body>
</html>
    `

    res.send(markup)
}



// client.js
import {render} from 'react-dom'

if (typeof document !== 'undefined') {
  const props = window.__APP_DATA__
  render(
    <App {...props} />,
    document.getElementById('react-target'),
  )
}



//
//
