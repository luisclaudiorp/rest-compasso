const Client = require('../Models/Client')
const yup = require('yup')

class ClientController {
  async showAll (req, res) {
    try {
      const clients = await Client.find().populate('city', ['name', 'state'])
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
      const client = await Client.findOne({ fullName: req.params.fullName })
      if (client.length === 0) {
        return res.status(400).json({
          message: 'No client found'
        })
      } else {
        return res.status(200).send({ client })
      }
    } catch (error) {
      return res.status(400).json({
        message: 'No client found'
      })
    }
  }

  async showById (req, res) {
    try {
      const client = await Client.findOne({ _id: req.params.id })
      if (client.length === 0) {
        return res.status(400).json({
          message: 'Client not found'
        })
      } else {
        return res.status(200).send({ client })
      }
    } catch (error) {
      return res.status(400).json({
        message: 'Client not found'
      })
    }
  }

  async store (req, res) {
    const schema = yup.object().shape({
      fullName: yup.string().required(),
      birthDate: yup.string().required(),
      city: yup.string().required(),
      age: yup.number().required(),
      sex: yup.string().required()
    })
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        message: 'Invalid data'
      })
    }
    const clientExist = await Client.findOne({ fullName: req.body.fullName })
    if (clientExist) {
      return res.status(400).json({
        message: 'Client already registered'
      })
    }
    try {
      const { fullName, birthDate, city, age, sex } = req.body
      await Client.create({ fullName, birthDate, city, age, sex })

      return res.status(201).json({
        message: 'Client ​​successfully registered'
      })
    } catch (error) {
      return res.status(400).json({
        message: 'Error entering client'
      })
    }
  }

  async update (req, res) {
    try {
      const { fullName, birthDate, city, age, sex } = req.body
      const client = await Client.findByIdAndUpdate(req.params.id, {
        fullName, birthDate, city, age, sex
      }, { new: true })
      return res.status(201).json({ client })
    } catch (error) {
      return res.status(400).json({
        message: 'No updating client'
      })
    }
  }

  async destroy (req, res) {
    try {
      const client = await Client.findByIdAndRemove(req.params.id)
      if (!client) {
        return res.status(400).json({
          message: 'Client not found'
        })
      } else {
        return res.status(200).json({
          message: 'Client successfully deleted'
        })
      }
    } catch (error) {
      return res.status(400).json({
        message: 'No deleting Client'
      })
    }
  }
}
module.exports = new ClientController()
