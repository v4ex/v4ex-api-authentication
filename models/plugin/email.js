const mongoose = require('../mongoose')

const Schema = mongoose.Schema

const EmailSchema = new Schema({
  address: { type: String, unique: true }
})

const Email = mongoose.model('Email', EmailSchema)

module.exports = {
  Email,
  EmailSchema
}