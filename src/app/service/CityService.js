// const RepositoryCity = require('../repository/Repository')
const Repository = require('../repository/Repository')
const City = require('../schema/City')

class CityService {
  async get (query) {
    try {
      return await new Repository(City).getAll(query)
    } catch (error) {
      return error
    }
  }

  async create ({ name, state }) {
    try {
      return await new Repository(City).create({ name, state })
    } catch (error) {
      return error
    }
  }

  async update (city, newData) {
    try {
      const { _id } = await this.getById(city)
      return await new Repository(City).update({ _id }, newData)
    } catch (error) {
      return error
    }
  }

  async getById (_id) {
    try {
      return await new Repository(City).getOne(_id)
    } catch (error) {
      return error
    }
  }

  async delete (_id) {
    try {
      return await new Repository(City).delete(_id)
    } catch (error) {
      return error
    }
  }
}

module.exports = new CityService()
