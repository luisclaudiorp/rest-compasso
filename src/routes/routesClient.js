const { Router } = require('express')
const routes = new Router()

const ClientController = require('../app/Controllers/ClientController')

routes.get('/', ClientController.showAll)

routes.get('/name/:name', ClientController.showByName)

routes.get('/:id', ClientController.showById)

routes.post('/', ClientController.store)

routes.put('/:id', ClientController.update)

routes.delete('/:id', ClientController.destroy)

module.exports = routes
