const mongoose = require('mongoose')

const Client = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unique: true
  },
  sex: {
    type: String,
    required: true
  },
  birthDate: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'city',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('client', Client)