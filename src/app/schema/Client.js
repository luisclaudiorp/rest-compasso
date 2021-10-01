const mongoose = require('mongoose')

const Client = mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  birthDate: {
    type: String,
    required: true
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'city',
    required: true
  },
}, {
  timestamps: true
})

Client.virtual('Name').
  get(function() { return `${this.fullName} ${this.gender}`; }).
  set(function(v) {
    // `v` is the value being set, so use the value to set
    // `firstName` and `lastName`.
    const fullName = v.substring(0, v.indexOf(' '));
    const gender = v.substring(v.indexOf(' ') + 1);
    this.set({ fullName, gender });
  });

// Client.virtual('age')
//   .get(function() { return `${this.age}`})

//   .set(function getAge (birthDate) {
//   var dates = birthDate.split("/");
//   var d = new Date();

//   var userday = dates[0];
//   var usermonth = dates[1];
//   var useryear = dates[2];

//   var curday = d.getDate();
//   var curmonth = d.getMonth()+1;
//   var curyear = d.getFullYear();

//   var age = curyear - useryear;

//   if((curmonth < usermonth) || ( (curmonth == usermonth) && curday < userday   )){
//       age--;
//   }
//    this.set({ age })
// })

module.exports = mongoose.model('client', Client)
