const ServiceCity = require('../service/CityService')

class CityController {
  async get (req, res) {
    try {
      const query = req.params.data
      const cities = await ServiceCity.get(query)
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
      await ServiceCity.create(query)
      return res.status(201).json({
        message: 'city ​​successfully registered'
      })
    } catch (error) {
      return res.status(400).json({
        message: 'Error entering city'
      })
    }
  }

  async update (req, res) {
    try {
      const query = req.params.id
      const updateData = req.body
      await ServiceCity.update(query, updateData)
      return res.status(200).json({
        message: 'city ​​successfully updated'
      })
    } catch (error) {
      return res.status(400).json({
        message: 'No updating city'
      })
    }
  }

  async delete (req, res) {
    try {
      const query = req.params.id
      const cities = await ServiceCity.delete(query)
      return res.status(200).json({
        message: 'City successfully deleted'
      })
    } catch (error) {
      return res.status(400).json({
        message: 'No deleting city'
      })
    }
  }
}
module.exports = new CityController()
