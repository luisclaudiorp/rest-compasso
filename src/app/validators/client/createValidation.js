const Joi = require('joi')
const ValidationError = require('../../../helpers/errors/ValidationError')
module.exports = async (req, res, next) => {
  try {
    const clientSchema = Joi.object({
      fullName: Joi.string()
        .min(3)
        .max(30)
        .trim()
        .required(),

      gender: Joi.string()
        .min(4)
        .max(15)
        .trim()
        .required(),

      birthDate: Joi.string()
        .length(10)
        .required(),

      city: Joi.string()
        .length(24)
        .required()
    })
    const { error } = await clientSchema.validate(req.body, { abortEarly: true })
    if (error) throw new ValidationError(error, 400)
    return next()
  } catch (error) {
    res.status(400).json(error)
  }
}
