import React from 'react'
import {
  renderToString,
} from 'react-dom/server'

import {verySpecificApiCall} from 'my-api'
import {templateMarkup} from '../somewhere'

const App = ({...props}) => (
  <div>{/* App-y Stuff */}</div>
)

async function serve(req, res) {
    const {someId} = req.cookies
    const props = await verySpecificApiCall(someId)
    const appAsString = renderToString(
        <App {...props} />
    )
    res.send(templateMarkup(appAsString))
}
