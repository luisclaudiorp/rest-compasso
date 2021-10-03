const City = require('../schema/City')

class CityRepositoy {
  getAll () {
    return City.find()
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
