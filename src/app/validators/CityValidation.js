const Joi = require('joi')

const citySchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(20)
    .lowercase()
    .required(),

  state: Joi.string()
    .min(1)
    .max(2)
    .lowercase()
    .required()
})

const _idSchema = Joi.object({
  _id: Joi.string()
    .alphanum()
    .length(24)
})

module.exports = { citySchema, _idSchema }
