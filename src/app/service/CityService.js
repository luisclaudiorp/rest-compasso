const CityRepository = require('../repository/CityRepository')

class CityService {
  async get (query) {
    try {
      return await CityRepository.getAll(query)
    } catch (error) {
      return error
    }
  }

  async create ({ name, state }) {
    try {
      return await CityRepository.create({ name, state })
    } catch (error) {
      return error
    }
  }

  async update (city, newData) {
    try {
      const { _id } = await this.getById(city)
      return await CityRepository.update({ _id }, newData)
    } catch (error) {
      return error
    }
  }

  async getById (_id) {
    try {
      return await CityRepository.getOne(_id)
    } catch (error) {
      return error
    }
  }

  async delete (_id) {
    try {
      return await CityRepository.delete(_id)
    } catch (error) {
      return error
    }
  }
}

module.exports = new CityService()
