const Repository = require('../repository/Repository')
const Client = require('../schema/Client')

class ClientService {
  async get (query) {
    try {
      return await new Repository(Client).getAll(query)
    } catch (error) {
      return error
    }
  }

  async create ({ ...data }) {
    try {
      return await new Repository(Client).create({ ...data })
    } catch (error) {
      return error
    }
  }

  async update (client, newData) {
    try {
      const { _id } = await new Repository(Client).getById(client)
      return await new Repository(Client).update({ _id }, newData)
    } catch (error) {
      return error
    }
  }

  async getById (_id) {
    try {
      return await new Repository(Client).getOne(_id)
    } catch (error) {
      return error
    }
  }

  async delete (_id) {
    try {
      return await new Repository(Client).delete(_id)
    } catch (error) {
      return error
    }
  }
}

module.exports = new ClientService()
