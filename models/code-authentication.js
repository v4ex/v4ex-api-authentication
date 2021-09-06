const { Identity } = require('./identity')


const mongoose = Identity.base
const Schema = mongoose.Schema

const CodeAuthenticationSchema = new Schema({
  identity: { type: mongoose.ObjectId, ref: Identity, required: true },
  code: String
})

const CodeAuthentication = mongoose.model('CodeAuthentication', CodeAuthenticationSchema)


module.exports = {
  CodeAuthentication,
  CodeAuthenticationSchema
}
