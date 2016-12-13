import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'

const HtmlDoc = ({title, text}) => (
  <html>
    <head>
      <title>{title}</title>
    </head>
    <body>
      <h1>{title}</h1>
      <p>{text}</p>
      <div id='react-target-a' />
      <div id='react-target-b' />
      <div id='react-target-c' />
      <script async src='./widget-a.js' />
      <script async src='./widget-b.js' />
      <script async src='./widget-c.js' />
    </body>
  </html>
)

const markup = renderToStaticMarkup(
  <HtmlDoc
    title='Happy Holidays'
    text="Just a test, don't stop the party" />
)



// widget-a.js
import {render} from 'react-dom'

const WidgetA = ({...props}) => (
  <div>{/* Widget-y Stuff */}</div>
)

render(
  WidgetA,
  document.getElementById('react-target'),
)



// widget-b.js
import {render} from 'react-dom'

const WidgetB = ({...props}) => (
  <div>{/* Widget-y Stuff */}</div>
)

render(
  WidgetB,
  document.getElementById('react-target'),
)



// widget-c.js
import {render} from 'react-dom'

const WidgetC = ({...props}) => (
    <div>{/* Widget-y Stuff */}</div>
)

render(
    WidgetC,
    document.getElementById('react-target'),
)



//
//
