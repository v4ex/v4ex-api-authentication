const mongoose = require('../mongoose')

const Schema = mongoose.Schema

const AuthenticationConnectIdSchema = new Schema({
  provider: String,
  id: String
}, { _id: false })

const AuthenticationIdSchema = new Schema({
  name: String,
  email: String,
  connects: [AuthenticationConnectIdSchema]
}, { _id: false });

const AuthenticationConnectPassSchema = new Schema({
  provider: String,
  id: String,
  token: String
}, { _id: false })

const AuthenticationPassSchema = new Schema({
  password: String,
  connects: [AuthenticationConnectSchema]
}, { _id: false })

const AuthenticationSchema = new Schema({
  id: AuthenticationIdSchema,
  pass: AuthenticationPassSchema
})

const Authentication = mongoose.model('Authentication', AuthenticationSchema)

module.exports = {
  Authentication,
  AuthenticationSchema
}
