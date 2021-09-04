const { Username } = require('./username')
const { Email } = require('./email')
const { Phone } = require('./phone')
const { ConnectedIdentity } = require('./connected-identity')

const mongoose = Username.base

const Schema = mongoose.Schema

const IdentitySchema = new Schema({
  username: Username,
  email: Email,
  phone: Phone,
  connectedIdentities: [ConnectedIdentity]
})

const Identity = mongoose.model('Identity', IdentitySchema)

module.exports = {
  Identity,
  IdentitySchema
}
