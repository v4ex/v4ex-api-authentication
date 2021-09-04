const mongoose = require('../mongoose')

const Schema = mongoose.Schema

const PhoneSchema = new Schema({
  value: String
})

const Phone = mongoose.model('Phone', PhoneSchema)

module.exports = {
  Phone,
  PhoneSchema
}
