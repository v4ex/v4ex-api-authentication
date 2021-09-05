require('dotenv').config()

let mongoose

// Use standalone database,
if (process.env.AUTHENTICATION_MONGO_URI) {
  mongoose = require('mongoose')
  mongoose.connect(process.env.AUTHENTICATION_MONGO_URI)
} else { // or shared database.
  mongoose = require('v4ex-api-core').mongoose
}

module.exports = mongoose
