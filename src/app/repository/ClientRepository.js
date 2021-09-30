const Client = require('../schema/Client')

class ClientRespository {
  getAll () {
    return Client.find()
  }

  getOne (query) {
    return Client.findById(query)
  }

  create ({ fullName, gender, birthDate, cityName }) {
    return Client.create({ fullName, gender, birthDate, cityName })
  }

  update (_id, updateData) {
    return Client.findOneAndUpdate(_id, updateData, { new: true })
  }

  delete ({ _id }) {
    return Client.findOneAndDelete(_id)
  }
}

module.exports = new ClientRespository()
