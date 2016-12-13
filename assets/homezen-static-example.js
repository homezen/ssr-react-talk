import {
  get,
  has,
} from 'lodash'

import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import {NOT_FOUND} from 'http-status-codes'
import logger from '../utils/logger'
import {notImplementedHandler} from './generic-handlers'
import sendError from '../send-error'
import templateMapping from './template-mapping'

const debug = require('debug')('homebuddy-webapp:server:react-app-handler')

const legalFormHandler = (req, res) => {
  logger.info(`[react-app-handler] ${req.url}`)

  const templateData = get(req, 'body.templateData', {})
  const templateName = req.templateName

  if (!has(templateMapping, templateName)) {
    return sendError(res, NOT_FOUND)
  }

  const Root = get(templateMapping, templateName)
  const appHtml = renderToStaticMarkup(
    <Root {...templateData} />
  )

  debug('rendering Index')
  res.render('legal-form', {
    docTitle: templateName,
    reactHtml: appHtml,
  })
}

export const legalFormGetHandler = legalFormHandler
export const legalFormPostHandler = legalFormHandler
export const legalFormPutHandler = notImplementedHandler
export const legalFormDeleteHandler = notImplementedHandler
