const clear = require('../../helpers/clear')

class Respository {
  constructor (schema) {
    this._schema = schema
  }

  getAll (query) {
    clear(query)
    return this._schema.find(query)
  }

  getOne (query) {
    return this._schema.findOne(query)
  }

  getById (_id) {
    return this._schema.findById(_id)
  }

  create ({ ...data }) {
    return this._schema.create({ ...data })
  }

  update (_id, updateData) {
    return this._schema.findOneAndUpdate(_id, updateData, { new: true })
  }

  delete (_id) {
    return this._schema.findByIdAndRemove(_id)
  }
}

module.exports = Respository
