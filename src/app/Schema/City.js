const mongoose = require('mongoose')

const City = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('city', City)
