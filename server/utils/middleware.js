const logger = require('./logger')
const config = require('./config')
const fetch = require('node-fetch')

const unknownEndpoint = (req, res) => {
  res.status(404).json({ error: 'The requested path is not recognised' })
}

const errorHandler = (error, req, res, next) => {
  logger.error(error.message)
  res.status(403).json({
    success: false,
    error: error.message,
  })
  next(error)
}

const validateRecaptcha = async (req, res, next) => {
  const response = await fetch(config.RECAPTCHA_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${config.RECAPTCHA_SECRET}&response=${req.body.token}`,
  })
  const data = await response.json()
  
  if (!data.success) {
    return res.status(401).json({
      status: 401,
      message: "You have failed Google's reCaptcha test.",
    })
  }
  next()
}

module.exports = {
  errorHandler,
  unknownEndpoint,
  validateRecaptcha,
}
