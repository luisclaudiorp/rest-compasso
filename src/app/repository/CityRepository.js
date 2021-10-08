const City = require('../schema/City')
const clear = require('../../helpers/clear')

class CityRepositoy {
  getAll (query) {
    clear(query)
    return City.find(query)
  }

  getOne (query) {
    return City.findOne(query)
  }

  create ({ name, state }) {
    return City.create({ name, state })
  }

  update (_id, newData) {
    return City.findOneAndUpdate(_id, newData, { new: true })
  }

  delete (_id) {
    return City.findOneAndDelete(_id)
  }
}

module.exports = new CityRepositoy()
