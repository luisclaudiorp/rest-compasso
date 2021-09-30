const { Router } = require('express')
const routes = new Router()

const ClientController = require('../app/Controllers/ClientController')

routes.get('/', ClientController.get)

routes.post('/', ClientController.create)

routes.put('/:id', ClientController.update)

routes.delete('/:id', ClientController.delete)

module.exports = routes
