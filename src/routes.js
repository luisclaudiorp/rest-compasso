const { Router } = require('express')
const routes = new Router()

const CityController = require('./app/Controllers/CityController')

routes.get('/city', CityController.show)
routes.post('/city', CityController.index)

module.exports = routes
