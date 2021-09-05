const { Identity } = require('./identity')


const mongoose = Identity.base
const Schema = mongoose.Schema

const ConnectedAuthenticationSchema = new Schema({
  identity: { type: mongoose.ObjectId, ref: Identity, required: true },
  provider: String,
  id: String,
  type: String,
  token: String,
  info: mongoose.Mixed,
  tokens: mongoose.Mixed
})
ConnectedAuthenticationSchema.index({ provider: 1, id: 1 }, { unique: true })

const ConnectedAuthentication = mongoose.model('ConnectedAuthentication', ConnectedAuthenticationSchema)


module.exports = {
  ConnectedAuthentication,
  ConnectedAuthenticationSchema
}
