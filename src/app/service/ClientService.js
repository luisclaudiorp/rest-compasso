const RepositoryClient = require('../repository/ClientRepository')

class ClientService {
  async get () {
    const found = await RepositoryClient.get(this._id)
  }

  async create () {
    this.validate()
    const result = await RepositoryClient.insert()
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

}

module.exports = new ClientService()
