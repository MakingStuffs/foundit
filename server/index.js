const app = require('./app')
const https = require('https')
const config = require('./utils/config')
const logger = require('./utils/logger')
const fs = require('fs')

const server = https.createServer(
  {
    key: fs.readFileSync(config.SSL_KEY),
    cert: fs.readFileSync(config.SSL_CERT),
  },
  app
)

server.listen(config.PORT, () => {
  logger.info(`Connected to server on port ${config.PORT}`)
})
