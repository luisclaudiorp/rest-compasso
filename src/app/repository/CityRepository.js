const City = require('../schema/City')

class CityRepositoy {
  getAll ({ query }) {
    return City.find({ query })
  }

  getOne (query) {
    return City.findById(query)
  }

  create ({ name, state }) {
    return City.create({ name, state })
  }

  update (_id, newData) {
    return City.findOneAndUpdate(_id, newData, { new: true })
  }

  delete ({ _id }) {
    return City.findOneAndDelete(_id)
  }
}

module.exports = new CityRepositoy()
