const Client = require('../schema/Client')

class ClientRespository {
  getAll () {
    return Client.find().populate('city', ['name', 'state'])
  }

  getOne (query) {
    return Client.findById(query)
  }

  create ({ fullName, gender, birthDate, city }) {
    return Client.create({ fullName, gender, birthDate, city })
  }

  update (_id, updateData) {
    return Client.findOneAndUpdate(_id, updateData, { new: true })
  }

  delete ({ _id }) {
    return Client.findOneAndDelete(_id)
  }
}

module.exports = new ClientRespository()
