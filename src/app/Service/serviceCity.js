const RepositoryCity = require('../Repository/RepositoryCity')

class City {
  async createCity () {
    const result = await RepositoryCity.cityInsert({
      cityName: this.cityName,
      state: this.state
    })
    this._id = result._id
    this.createdAt = result.createdAt
    this.updatedAt = result.updatedAt
  }

  async getCity (data) {
    if(typeof data === 'string' && data.length > 3){
      let query = { cityName: data }
      const found = await RepositoryCity.cityGetOne(query)
      if(found === null){
        throw new Error ('No city found')
      }
      return found
    }else if (typeof data === 'string' && data.length === 2){
      let query = { state: data }
      const found = await RepositoryCity.cityGet(query)
      if(found.length === 0){
        throw new Error ('No state found')
      }
      return found
    } else{
      throw new Error ('insert name city ou state')
    }
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

  deleteCity (_id) {
    return RepositoryCity.cityRemove(_id)
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

