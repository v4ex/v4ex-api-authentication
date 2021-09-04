const mongoose = require('../../mongoose')

const Schema = mongoose.Schema

const PhoneSchema = new Schema({
  number: { type: String, unique: true }
})

const Phone = mongoose.model('Phone', PhoneSchema)

module.exports = {
  Phone,
  PhoneSchema
}
