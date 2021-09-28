const Client = require('../Schema/client')

module.exports = {
  get () {
    return Client.find({})
  },
  insert (Client) {
    return Client.create(Client)
  },
  update (_id, updateData) {
    return Client.updateOne(updateData, {
      $where: { _id: _id }
    })
  },
  remove (_id) {
    return Client.deleteOne({
      $where: { _id: _id }
    })
  }
}
