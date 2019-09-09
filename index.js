const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const routeBot = require('./routes/bot')
const routeREST = require('./routes/rest')

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

server.use(cors())

server.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'rayriffy')
  next()
})

server.get('/', (req, res) => {
  res.status(200).send({
    status: 'success',
    code: 201,
    response: {
      title: 'มึงสิอีกระเทย!',
      createdBy: '@rayriffy',
    },
  })
})

server.use('/bot', routeBot)
server.use('/rest', routeREST)

server.all('*', (req, res) => {
  res.status(404).send({
    status: 'failure',
    code: 704,
    response: {
      message: 'route not found',
    },
  })
})

server.listen(3000)

module.exports = server
