const ServiceCity = require('../Service/serviceCity')
// const yup = require('yup')

class CityController {
  async getCity (req, res) {
    try {
      const query = req.params.data
      const cities = new ServiceCity()
      const found = await cities.getCity(query)
      return res.status(200).send( found )
    } catch (error) {
      return res.status(400).json({
        message: 'No cities found'
      })
    }
  }

  // async store (req, res) {
  //   const schema = yup.object().shape({
  //     name: yup.string().required(),
  //     state: yup.string().required()
  //   })
  //   if (!(await schema.isValid(req.body))) {
  //     return res.status(400).json({
  //       message: 'Invalid data'
  //     })
  //   }
  //   const cityExist = await City.findOne({ name: req.body.name })
  //   if (cityExist) {
  //     return res.status(400).json({
  //       message: 'City already registered'
  //     })
  //   }
  //   try {
  //     const { name, state } = req.body
  //     const data = { name, state }
  //     await City.create(data)
  //     return res.status(201).json({
  //       message: 'city ​​successfully registered'
  //     })
  //   } catch (error) {
  //     return res.status(400).json({
  //       message: 'Error entering city'
  //     })
  //   }
  // }

  // async update (req, res) {
  //   try {
  //     const { name, state } = req.body
  //     const city = await City.findByIdAndUpdate(req.params.id, {
  //       name, state
  //     }, { new: true })
  //     return res.status(200).send({ city })
  //   } catch (error) {
  //     return res.status(400).json({
  //       message: 'No updating city'
  //     })
  //   }
  // }

  async delete (req, res) {
    try {
    const query = req.params.id
    const cities = new ServiceCity()
    const found = await cities.deleteCity(query)
    console.log(found)
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
