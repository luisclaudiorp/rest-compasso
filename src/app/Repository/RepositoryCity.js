const City = require('../Schema/City')

module.exports = {
  cityGet (query) {
    return City.find(query)
  },
  cityGetOne (query) {
    return City.findOne(query)
  },
  cityInsert (city) {
    const { cityName, state } = city
    return City.create({ cityName, state })
  },
  cityUpdate (updateData) {
    const { _id, cityName, state } = updateData
    // console.log(updateData)
    return City.findByIdAndUpdate({ cityName, state }, { _id: _id }, { new: true })
  },
  cityRemove (_id) {
    return City.deleteOne({ _id: _id })
  }
}
