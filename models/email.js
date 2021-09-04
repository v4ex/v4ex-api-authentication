const mongoose = require('../mongoose')

const Schema = mongoose.Schema

const EmailSchema = new Schema({
  address: String,
  verified: Boolean
})

const Email = mongoose.model('Email', EmailSchema)

module.exports = {
  Email,
  EmailSchema
}
