const mongoose = require('mongoose')
require('dotenv').config()

class Connection {
  constructor () {
    this.dataBaseConnectionMongoDB()
  }

  dataBaseConnectionMongoDB () {
    this.mongoDBConnection = mongoose.connect(process.env.DB_HOST)
      .then(() => {
        console.log('Connected to MongoDB')
      }).catch((error) => {
        console.log(`Connection failed to MongoDB error: ${error}`)
      })
  }
}

module.exports = new Connection()
