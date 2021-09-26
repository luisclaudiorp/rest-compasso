const City = require('../Models/City')
const yup = require('yup')

class CityController {
  async showAll (req, res) {
    try {
      const cities = await City.find()
      if (cities.length === 0) {
        return res.status(400).json({
          message: 'No cities found'
        })
      } else {
        return res.status(200).send({ cities })
      }
    } catch (error) {
      return res.status(400).json({
        message: 'No cities found'
      })
    }
  }

  async showByName (req, res) {
    try {
      const city = await City.findOne({ name: req.params.name })

      return res.status(200).send({ city })
    } catch (error) {
      return res.status(400).json({
        message: 'No city found'
      })
    }
  }

  async showByState (req, res) {
    try {
      const city = await City.find({ state: req.params.state })

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
        message: 'Invalid data'
      })
    }
    const cityExist = await City.findOne({ name: req.body.name })
    if (cityExist) {
      return res.status(400).json({
        message: 'City already registered'
      })
    }
    try {
      const { name, state } = req.body
      const data = { name, state }
      await City.create(data)
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
      const { name, state } = req.body
      const city = await City.findByIdAndUpdate(req.params.id, {
        name, state
      }, { new: true })
      return res.status(200).send({ city })
    } catch (error) {
      return res.status(400).json({
        message: 'No updating city'
      })
    }
  }

  async destroy (req, res) {
    try {
      await City.findByIdAndRemove(req.params.id)

      return res.status(200).send()
    } catch (error) {
      return res.status(400).json({
        message: 'No deleting city'
      })
    }
  }
}
module.exports = new CityController()
