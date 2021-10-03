const Client = require('../schema/Client')

class ClientRespository {
  getAll () {
    return Client.find().populate('city', ['name', 'state'])
  }

  getOne (query) {
    return Client.findOne(query)
  }

  getById (_id) {
    return Client.findById(_id)
  }

  create ({ fullName, gender, birthDate, city }) {
    return Client.create({ fullName, gender, birthDate, city })
  }

  update (_id, updateData) {
    return Client.findOneAndUpdate(_id, updateData, { new: true })
  }

  delete (_id) {
    return Client.findByIdAndRemove(_id)
  }
}

module.exports = new ClientRespository()
