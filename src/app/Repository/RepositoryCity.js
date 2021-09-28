const City = require('../Schema/City')

module.exports = {
  cityGet (data) {
    return City.find({ $or: [{ data }, {}] })
  },
  cityInsert (city) {
    return City.create(city)
  },
  cityUpdate (_id, updateData) {
    return City.updateOne(updateData, {
      $where: { _id: _id }
    })
  },
  cityRemove (_id) {
    return City.deleteOne({
      $where: { _id: _id }
    })
  }
}
