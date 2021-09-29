const { Router } = require('express')
const routes = new Router()

const CityController = require('../app/Controllers/CityController')

routes.get('/:data?', CityController.getCity)

routes.post('/', CityController.create)

routes.put('/:id', CityController.update)

routes.delete('/:id', CityController.delete)

module.exports = routes
