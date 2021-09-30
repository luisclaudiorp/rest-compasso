const Joi = require('joi')

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
        .isoDate(),

      cityName: Joi.string()
      .min(3)
      .max(30)
      .trim()
      .required()
    })
    const { error } = await clientSchema.validate(req.body, { abortEarly: true })
    if(error) throw error
    return next()
  } catch (error) {
    res.status(400).json(error)
  }
}
