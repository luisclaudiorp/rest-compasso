const City = require('../Schema/City')

module.exports = {
  cityGet (query) {
    return City.find(query)
  },
  cityGetOne (query) {
    return City.findOne(query)
  },
  cityInsert (city) {
    return City.create(city)
  },
  cityUpdate (_id, updateData) {
    return City.updateOne(updateData, { _id: _id })
  },
  cityRemove (_id) {
    return City.deleteOne({_id: _id})
  }
}
