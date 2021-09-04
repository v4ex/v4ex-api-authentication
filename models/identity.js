const mongoose = require('../mongoose')

const Schema = mongoose.Schema

const IdentitySchema = new Schema({})

const Identity = mongoose.model('Identity', IdentitySchema)

module.exports = {
  Identity,
  IdentitySchema
}
