const { Authentication } = require('./authentication')
const mongoose = Authentication.base

const Schema = mongoose.Schema

const TokenSchema = new Schema({
  authentication: { type: Authentication, required: true },
  token: { type: String, required: true }
})

const Token = mongoose.model('Token', TokenSchema)

module.exports = {
  Token,
  TokenSchema
}
