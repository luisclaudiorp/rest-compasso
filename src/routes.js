const { Router } = require('express')
const routes = new Router()

const CityController = require('./app/Controllers/CityController')

routes.get('/city', CityController.showAll)

routes.get('/city/:id', CityController.show)

routes.post('/city', CityController.store)

routes.put('/city/:id', CityController.update)

routes.delete('/city/:id', CityController.destroy)

module.exports = routes
