const { Identity } = require('./identity')


const mongoose = Identity.base
const Schema = mongoose.Schema

const AuthenticationSchema = new Schema({
  identity: { type: mongoose.ObjectId, ref: Identity, required: true },
  password: String
})

const Authentication = mongoose.model('Authentication', AuthenticationSchema)


module.exports = {
  Authentication,
  AuthenticationSchema
}
