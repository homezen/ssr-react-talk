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
            <div id='react-target' />
            <script async src='./widget.js' />
        </body>
    </html>
)

const markup = renderToStaticMarkup(
    <HtmlDoc
        title='Happy Holidays'
        text="Just a test, don't stop the party" />
)



// widget.js
import {render} from 'react-dom'

const Widget = ({...props}) => (
    <div>{/* Widget-y Stuff */}</div>
)

render(
    <Widget />,
    document.getElementById('react-target'),
)



//
//
//
