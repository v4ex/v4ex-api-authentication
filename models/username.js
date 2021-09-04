const mongoose = require('../mongoose')

const Schema = mongoose.Schema

const UsernameSchema = new Schema({
  value: String
})

const Username = mongoose.model('Username', UsernameSchema)

module.exports = {
  Username,
  UsernameSchema
}
