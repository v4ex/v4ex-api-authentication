const { Identity } = require('./identity')
const mongoose = Identity.base

// const { ConnectedRecognition, ConnectedRecognitionSchema } = require('./connected-recognition')

const Schema = mongoose.Schema

const AuthenticationSchema = new Schema({
  identity: { type: mongoose.ObjectId, ref: Identity},
  password: String,
  // connectedRecognition: ConnectedRecognitionSchema
})

const Authentication = mongoose.model('Authentication', AuthenticationSchema)

module.exports = {
  Authentication,
  AuthenticationSchema
}
