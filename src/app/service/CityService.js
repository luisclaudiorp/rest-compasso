const RepositoryCity = require('../repository/CityRepository')

class CityService {
  async get ({name, state }) {
    try {
      if(typeof name === 'string'){
        return await RepositoryCity.getOne({ name })
      }else if( typeof state === 'string'){
        return await RepositoryCity.getOne({ state })
      }else{
      return await RepositoryCity.getAll({})
      }
    } catch (error) {
      return error
    }
  }

  async create ({ name, state }) {
    try {
      return await RepositoryCity.create({ name, state })
    } catch (error) {
      return error
    }
  }

  async update (city, newData) {
    try {
      const { _id } = await this.getById(city)
      return await RepositoryCity.update({ _id }, newData)
    } catch (error) {
      return error
    }
  }

  async getById (_id) {
    try {
      return await RepositoryCity.getOne(_id)
    } catch (error) {
      return error
    }
  }

  async delete (_id) {
    try {
      return await RepositoryCity.delete(_id)
    } catch (error) {
      return error
    }
  }
}

module.exports = new CityService()
