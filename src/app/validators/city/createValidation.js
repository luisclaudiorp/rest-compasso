const Joi = require('joi')

module.exports = async (req, res, next) => {
  try {
    const citySchema = Joi.object({
      name: Joi.string()
        .min(3)
        .max(30)
        .trim()
        .required(),

      state: Joi.string()
        .min(1)
        .max(2)
        .trim()
        .required()
    })
    await citySchema.validate(req.body, { abortEarly: true })

    return next()
  } catch (error) {
    res.status(400).json(error)
  }
}
