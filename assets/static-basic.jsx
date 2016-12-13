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
        </body>
    </html>
)

const markup = renderToStaticMarkup(
    <HtmlDoc
        title='Happy Holidays'
        text="Just a test, don't stop the party" />
)

console.log(markup)
