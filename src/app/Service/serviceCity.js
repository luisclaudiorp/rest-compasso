const RepositoryCity = require('../Repository/RepositoryCity')

class City {
  constructor ({ _id, cityName, state, createdAt, updatedAt }) {
    this._id = _id
    this.cityName = cityName
    this.state = state
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  async createCity () {
    this.validate()
    const result = await RepositoryCity.cityInsert({
      cityName: this.cityName,
      state: this.state
    })
    this._id = result._id
    this.createdAt = result.createdAt
    this.updatedAt = result.updatedAt
  }

  async getCity () {
    const found = await RepositoryCity.cityGet()
    console.log(found)
    this._id = found._id
    this.cityName = found.cityName
    this.state = found.state
    this.createdAt = found.createdAt
    this.updatedAt = found.updatedAt
  }

  async updateCity () {
    await RepositoryCity.cityGet(this._id)
    const fields = ['cityName', 'state']
    const dataUpdate = {}
    fields.forEach((field) => {
      const data = this[field]

      if (typeof data === 'string' && data.length === 0) {
        dataUpdate[field] = data
      }
      if (Object.keys(dataUpdate).length === 0) {
        throw new Error('data not provided')
      }
    })
    await RepositoryCity.cityUpdate(this._id, dataUpdate)
  }

  deleteCity () {
    return RepositoryCity.cityRemove(this._id)
  }

  validateCity () {
    const fields = ['cityName', 'state']
    fields.forEach((field) => {
      const data = this[field]

      if (typeof data === 'string' && data.length === 0) {
        throw new Error('invalid fields')
      }
    })
  }
}

module.exports = City
