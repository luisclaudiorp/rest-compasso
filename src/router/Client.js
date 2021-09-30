const { Router } = require('express')
const routes = new Router()

const ClientController = require('../app/Controllers/ClientController')
const createValidation = require('../app/validators/client/createValidation')

routes.get('/', ClientController.get)

routes.post('/', createValidation, ClientController.post)

routes.put('/:id', ClientController.update)

routes.delete('/:id', ClientController.delete)

module.exports = routes
