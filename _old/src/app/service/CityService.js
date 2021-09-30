const RepositoryCity = require('../repository/CityRepository')
const { citySchema, _idSchema } = require('../validators/CityValidation')

class CityService {
  async create (data) {
    try {
      const validation = await citySchema.validateAsync(data)
      await RepositoryCity.create(validation)
    } catch (error) {
      throw new Error('Error')
    }
  }

  async get(data) {
    if (typeof data === 'string' && data.length > 2) {
      const query = { name: data }
      const found = await RepositoryCity.getOne(query)
      if (found === null) {
        throw new Error('No city found')
      }
      return found
    } else if (typeof data === 'string' && data.length === 2) {
      const query = { state: data }
      const found = await RepositoryCity.get(query)
      if (found.length === 0) {
        throw new Error('No state found')
      }
      return found
    } else if (data === undefined) {
      const query = {}
      const found = await RepositoryCity.get(query)
      return found
    }
  }

  async update (city, newData) {
    try {
      const {_id} = await this.getId(city)
      const validationData = await citySchema.validateAsync(newData)
      await RepositoryCity.update(_id.toString(), validationData)
    } catch (error) {
      throw new Error('Error')
    }

  }

  async getId (_id) {
    try {
      const validationId = await _idSchema.validateAsync({ _id })
      return await RepositoryCity.getOne(validationId)
    } catch (error) {
      throw new Error('Error')
    }
  }

  delete (_id) {
    return RepositoryCity.delete(_id)
  }
}

module.exports = new CityService()
