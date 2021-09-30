const { Router } = require('express')
const routes = new Router()

const CityController = require('../app/controllers/CityController')

routes.get('/:data?', CityController.get)

routes.post('/', CityController.create)

routes.put('/:id', CityController.update)

routes.delete('/:id', CityController.delete)

module.exports = routes
