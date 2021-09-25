const City = require('../Models/City')
const yup = require('yup')

class CityController {
  async showAll (req, res) {
    try {
      const cities = await City.find()
      if (cities.length === 0) {
        return res.status(400).json({
          message: 'No city found'
        })
      }
      return res.status(200).send({ cities })
    } catch (error) {
      return res.status(400).json({
        message: 'No city found'
      })
    }
  }

  async show (req, res) {
    try {
      const city = await City.findById(req.params.id)

      return res.status(200).send({ city })
    } catch (error) {
      return res.status(400).json({
        message: 'No city found'
      })
    }
  }

  async store (req, res) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      state: yup.string().required()
    })
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error: true,
        message: 'Error invalid data'
      })
    }
    const cityExist = await City.findOne({ name: req.body.name })
    if (cityExist) {
      return res.status(400).json({
        error: true,
        message: 'Error City already registered'
      })
    }
    const { name, state } = req.body
    const data = { name, state }
    await City.create(data, (err) => {
      if (err) {
        return res.status(400).json({
          error: true,
          message: 'Error entering city'
        })
      }
      return res.status(201).json({
        error: false,
        message: 'city ​​successfully registered'
      })
    })
  }

  async update (req, res) {
    res.send({ city: req.params.id })
  }

  async destroy (req, res) {
    res.send({ city: req.params.id })
  }
}
module.exports = new CityController()
