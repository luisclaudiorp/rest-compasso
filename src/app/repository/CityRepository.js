const City = require('../schema/City')

class CityRepositoy {
  get (query) {
    return City.find(query)
  }

  getOne (query) {
    return City.findOne(query)
  }

  create (city) {
    const { name, state } = city
    return City.create({ name, state })
  }

  update (city, newData) {
    return City.findOneAndUpdate({ _id: city },newData ,{ new: true })
  }

  delete (_id) {
    return City.deleteOne({ _id: _id })
  }
}

module.exports =  new CityRepositoy()
