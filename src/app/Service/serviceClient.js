const RepositoryClient = require('../Repository/RepositoryClient')

class Client {
  constructor ({ _id, fullName, sex, birthDate, createdAt, updatedAt, cityName }) {
    this._id = _id
    this.fullName = fullName
    this.sex = sex
    this.birthDate = birthDate
    this.cityName = cityName
    this.createdAt = createdAt
    this.updatedAt = updatedAt
  }

  async create () {
    this.validate()
    const result = await RepositoryClient.insert({
      fullName: this.fullName,
      sex: this.sex,
      birthDate: this.birthDate,
      cityName: this.cityName
    })
    this._id = result._id
    this.createdAt = result.createdAt
    this.updatedAt = result.updatedAt
  }

  async get () {
    const found = await RepositoryClient.get(this._id)
    this._id = found._id
    this.fullName = found.fullName
    this.sex = found.sex
    this.birthDate = found.birthDate
    this.cityName = found.cityName
    this.createdAt = found.createdAt
    this.updatedAt = found.updatedAt
  }

  async update () {
    await RepositoryClient.get(this._id)
    const fields = ['fullName', 'sex', 'birthDate', 'cityName']
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
    await RepositoryClient.update(this._id, dataUpdate)
  }

  delete () {
    return RepositoryClient.remove(this._id)
  }

  validate () {
    const fields = ['fullName', 'sex', 'birthDate', 'cityName']
    fields.forEach((field) => {
      const data = this[field]

      if (typeof data === 'string' && data.length === 0) {
        throw new Error('invalid fields')
      }
    })
  }
}

module.exports = Client
