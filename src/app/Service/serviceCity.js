const RepositoryCity = require('../Repository/RepositoryCity')
const { citySchema, _idSchema } = require('../Validators/validationCity')

class City {
  async createCity (data) {
    try {
      const validation = await citySchema.validateAsync(data)
      await RepositoryCity.cityInsert(validation)
    } catch (error) {
      console.log(error)
    }
  }

  async getCity (data) {
    if (typeof data === 'string' && data.length > 2) {
      const query = { cityName: data }
      const found = await RepositoryCity.cityGetOne(query)
      if (found === null) {
        throw new Error('No city found')
      }
      return found
    } else if (typeof data === 'string' && data.length === 2) {
      const query = { state: data }
      const found = await RepositoryCity.cityGet(query)
      if (found.length === 0) {
        throw new Error('No state found')
      }
      return found
    } else if (data === undefined) {
      const query = {}
      const found = await RepositoryCity.cityGet(query)
      return found
    }
  }

  async updateCity (_id) {
    const updateData = await this.getCityById(_id)
  }

  async getCityById (_id) {
    try {
      const data = await _idSchema.validateAsync({ _id })
      // console.log(data)
      if (!_id === undefined) {
        const query = { _id: data }
        const found = await RepositoryCity.cityGetOne(query)
        console.log(found)
        return found
      }
    } catch (error) {
      console.log(error)
    }
  }

  deleteCity (_id) {
    return RepositoryCity.cityRemove(_id)
  }
}

module.exports = City
