const RepositoryClient = require('../repository/ClientRepository')

class ClientService {
  async get ({ query }) {
    try {
      if (query) {
        return await RepositoryClient.getOne({ query })
      } else {
        return await RepositoryClient.getAll({ query })
      }
    } catch (error) {
      return error
    }
  }

  async create ({ fullName, gender, birthDate, cityName }) {
    try {
      return await RepositoryClient.create({ fullName, gender, birthDate, cityName })
    } catch (error) {
      return error
    }
  }

  async update (client, newData) {
    try {
      const { _id } = await this.getById(client)
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
