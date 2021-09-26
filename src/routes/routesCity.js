const { Router } = require('express')
const routes = new Router()

const CityController = require('../app/Controllers/CityController')

routes.get('/', CityController.showAll)

routes.get('/name/:name', CityController.showByName)

routes.get('/state/:state', CityController.showByState)

routes.post('/', CityController.store)

routes.put('/:id', CityController.update)

routes.delete('/:id', CityController.destroy)

module.exports = routes
