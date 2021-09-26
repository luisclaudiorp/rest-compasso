const mongoose = require('mongoose')

const City = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  state: {
    type: String,
    required: true
  },
  clients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'client'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('city', City)
