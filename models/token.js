const { Identity } = require('./identity')
const mongoose = Identity.base

const Schema = mongoose.Schema

const TokenSchema = new Schema({
  identity: { type: mongoose.ObjectId, ref: Identity, required: true },
  token: { type: String, required: true },
  expire: Date
})

const Token = mongoose.model('Token', TokenSchema)

module.exports = {
  Token,
  TokenSchema
}
