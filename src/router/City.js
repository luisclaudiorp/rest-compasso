const { Router } = require('express')
const routes = new Router()
const createValidation = require('../app/validators/city/createValidation')
const updateValidation = require('../app/validators/city/updateValidation')
const CityController = require('../app/controllers/CityController')

routes.get('/', CityController.get)

routes.post('/', createValidation, CityController.create)

routes.put('/:id', updateValidation, CityController.update)

routes.delete('/:id', CityController.delete)

module.exports = routes
