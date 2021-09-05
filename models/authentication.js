const { Identity } = require('./identity')

const mongoose = Identity.base
const Schema = mongoose.Schema

const ConnectedRecognitionSchema = new Schema({
  provider: String,
  id: String,
  token: String,
  tokenInfo: mongoose.Mixed,
  tokens: mongoose.Mixed
}, { _id: false })

const AuthenticationSchema = new Schema({
  identity: { type: mongoose.ObjectId, ref: Identity, required: true },
  password: String,
  connectedRecognition: ConnectedRecognitionSchema
})

const Authentication = mongoose.model('Authentication', AuthenticationSchema)

module.exports = {
  Authentication,
  AuthenticationSchema,
  ConnectedRecognitionSchema
}
