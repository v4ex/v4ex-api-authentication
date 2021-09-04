require('dotenv').config()

let mongoose

// Use standalone database.
if (process.env.MONGO_URI_AUTHENTICATION) {
  mongoose = require('mongoose')
  mongoose.connect(process.env.MONGO_URI_AUTHENTICATION)
} else {
  mongoose = require('v4ex-api-core').mongoose
}

module.exports = mongoose
