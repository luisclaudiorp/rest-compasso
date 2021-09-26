const Client = require('../Models/Client')
// const City = require('../Models/City')

// const yup = require('yup')

class ClientController {
  async showAll (req, res) {
    try {
      const clients = await Client.find()
      if (clients.length === 0) {
        return res.status(400).json({
          message: 'No clients found'
        })
      } else {
        return res.status(200).send({ clients })
      }
    } catch (error) {
      return res.status(400).json({
        message: 'No clients found'
      })
    }
  }

  async showByName (req, res) {
    try {
      const client = await Client.findOne({ name: req.params.name })

      return res.status(200).send({ client })
    } catch (error) {
      return res.status(400).json({
        message: 'No client found'
      })
    }
  }

  async showById (req, res) {
    try {
      const client = await Client.find({ id: req.params.id })

      return res.status(200).send({ client })
    } catch (error) {
      return res.status(400).json({
        message: 'No client found'
      })
    }
  }

  async store (req, res) {
    res.send({ client: req.params.id })
  }

  async update (req, res) {
    res.send({ client: req.params.id })
  }

  async destroy (req, res) {
    res.send({ client: req.params.id })
  }
}
module.exports = new ClientController()
