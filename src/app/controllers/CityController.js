const ServiceCity = require('../service/CityService')

class CityController {
  async get (req, res) {
    try {
      const { name, state } = req.query
      const cities = await ServiceCity.get({ name, state })
      return res.status(200).send(cities)
    } catch (error) {
      return res.status(400).json({
        message: 'No cities found'
      })
    }
  }

  async create (req, res) {
    try {
      const query = req.body
      const result = await ServiceCity.create(query)
      return res.status(201).json(result)
    } catch (error) {
      return res.status(400).json({
        message: 'Error entering city'
      })
    }
  }

  async update (req, res) {
    try {
      const { id } = req.params
      const payload = req.body
      const result = await ServiceCity.update(id, payload)
      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json({
        message: 'No updating city'
      })
    }
  }

  async delete (req, res) {
    try {
      const { id } = req.params
      await ServiceCity.delete(id)
      return res.status(204).send()
    } catch (error) {
      return res.status(400).json({
        message: 'No deleting city'
      })
    }
  }
}
module.exports = new CityController()
