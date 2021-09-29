const ServiceCity = require('../Service/serviceCity')

class CityController {
  async getCity (req, res) {
    try {
      const query = req.params.data
      const cities = new ServiceCity()
      const found = await cities.getCity(query)
      return res.status(200).send(found)
    } catch (error) {
      return res.status(400).json({
        message: 'No cities found'
      })
    }
  }

  async create (req, res) {
    try {
      const query = req.body
      await new ServiceCity().createCity(query)
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
    const query = req.params.id
    const updateCity = await new ServiceCity().updateCity(query)
    // try {

    //   return res.status(200).send(updateCity)
    // } catch (error) {
    //   return res.status(400).json({
    //     message: 'No updating city'
    //   })
    // }
  }

  async delete (req, res) {
    try {
      const query = req.params.id
      const cities = new ServiceCity()
      const found = await cities.deleteCity(query)
      if (!found) {
        return res.status(400).json({
          message: 'City not found'
        })
      } else {
        return res.status(200).json({
          message: 'City successfully deleted'
        })
      }
    } catch (error) {
      return res.status(400).json({
        message: 'No deleting city'
      })
    }
  }
}
module.exports = new CityController()
