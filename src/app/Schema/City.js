const mongoose = require('mongoose')

const City = mongoose.Schema({
  cityName: {
    type: String,
    required: true,
    unique: true
  },
  state: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('city', City)
