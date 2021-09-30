const Client = require('../schema/Client')

class ClientRespository {
  get (query) {
    return Client.find(query)
  }

  getOne (query) {
    return Client.findOne(query)
  }

  create (client) {
    const { } = client
    return Client.create({})
  }

  update (_id, updateData) {
    return Client.updateOne(updateData, {
      $where: { _id: _id }
    })
  }

  delete (_id) {
    return Client.deleteOne( { _id: _id })
  }
}

module.exports = new ClientRespository()
