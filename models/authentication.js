const { Identity } = require('./identity')
const { ConnectedRecognitionSchema } = require('./connected-recognition')

const mongoose = Identity.base
const Schema = mongoose.Schema

const ConnectedRecognitionSchema = new Schema({
  provider: String,
  id: String,
  token: String
}, { _id: false })

const AuthenticationSchema = new Schema({
  identity: { type: mongoose.ObjectId, ref: Identity},
  password: String,
  connectedRecognition: ConnectedRecognitionSchema
})

const Authentication = mongoose.model('Authentication', AuthenticationSchema)

module.exports = {
  Authentication,
  AuthenticationSchema,
  ConnectedRecognitionSchema
}
