const ServiceClient = require('../service/ClientService')

class ClientController {
  async get (req, res) {
    try {
      const { fullName, id } = req.query
      const clients = await ServiceClient.get(fullName, id)
      return res.status(200).send(clients)
    } catch (error) {
      return res.status(400).json({
        message: 'No cities found'
      })
    }
  }

  async post (req, res) {
    try {
      const query = req.body
      const result = await ServiceClient.create(query)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(400).json({
        message: 'Error entering client'
      })
    }
  }

  async update (req, res) {
    try {
      const { id } = req.params
      const payload = req.body
      const result = await ServiceClient.update(id, payload)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(400).json({
        message: 'No updating client'
      })
    }
  }

  async delete (req, res) {
    try {
      const { id } = req.params
      await ServiceClient.delete(id)
      return res.status(204).send()
    } catch (error) {
      return res.status(400).json({
        message: 'No deleting Client'
      })
    }
  }
}
module.exports = new ClientController()
