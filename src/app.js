const express = require('express')
const cors = require('cors')
const routesCity = require('./routes/routesCity')
const routesClient = require('./routes/routesClient')
const morgan = require('morgan')
require('./config/connection')

class AppController {
  constructor () {
    this.express = express()
    this.middleware()
    this.routes()
  }

  middleware () {
    this.express.use(express.json())
    this.express.use(morgan('dev'))

    this.express.use((req, res, next) => {
      res.header('Access-Controll-AlloW-Origin', '*')
      res.header('Access-Controll-AlloW-Methods', 'GET, POST, PUT, DELETE')
      res.header('Access-Controll-AlloW-Headers', 'Content-type, Authorization, Acept, Origin, X-Requested-With')

      this.express.use(cors())
      next()
    })
  }

  routes () {
    this.express.use('/api/city', routesCity)
    this.express.use('/api/city/client', routesClient)
  }
}

module.exports = new AppController().express
