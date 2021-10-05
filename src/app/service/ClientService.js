const RepositoryClient = require('../repository/ClientRepository')

class ClientService {
  async get (query) {
    try {
      return await RepositoryClient.getAll(query)
    } catch (error) {
      return error
    }
  }

  async create ({ fullName, gender, birthDate, city }) {
    try {
      return await RepositoryClient.create({ fullName, gender, birthDate, city })
    } catch (error) {
      return error
    }
  }

  async update (client, newData) {
    try {
      const { _id } = await RepositoryClient.getById(client)
      return await RepositoryClient.update({ _id }, newData)
    } catch (error) {
      return error
    }
  }

  async getById (_id) {
    try {
      return await RepositoryClient.getOne(_id)
    } catch (error) {
      return error
    }
  }

  async delete (_id) {
    try {
      return await RepositoryClient.delete(_id)
    } catch (error) {
      return error
    }
  }
}

module.exports = new ClientService()
