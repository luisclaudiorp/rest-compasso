const mongoose = require('mongoose')

const Client = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true
  },
  birthDate: {
    type: String,
    required: true
  },
  cityName: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'city',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('client', Client)
