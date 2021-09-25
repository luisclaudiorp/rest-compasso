const express = require('express')
const cors = require('cors')
const routes = require('./routes')

class AppController {
  constructor () {
    this.express = express()
    this.middleware()
    this.routes()
  }

  middleware () {
    this.express.use(express.json())

    this.express.use((req, res, next) => {
      res.header('Access-Controll-AlloW-Origin', '*')
      res.header('Access-Controll-AlloW-Methods', 'GET, POST, PUT, DELETE')
      res.header('Access-Controll-AlloW-Headers', 'Content-type, Authorization, Acept, Origin, X-Requested-With')

      this.app.use(cors())
      next()
    })
  }

  routes () {
    this.express.use(routes)
  }
}

module.exports = new AppController().express
