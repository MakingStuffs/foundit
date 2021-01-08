require('express-async-error')
const express = require('express')
const app = express()
const submitRouter = require('./controllers/submit')
const indexRouter = require('./controllers/index')
const cors = require('cors')
const helmet = require('helmet')
const middleware = require('./utils/middleware')
const path = require('path')
const compression = require('compression')

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      'default-src': ["'self'", '*.google.com', '*.gstatic.com'],
      'script-src': [
        "'unsafe-inline'",
        "'unsafe-eval'",
        "'self'",
        '*.google.com',
        '*.gstatic.com',
      ],
    },
  })
)
app.use(cors())
app.use(compression())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../build')))

app.use('/', indexRouter)
app.use('/api/submit', submitRouter)

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app
