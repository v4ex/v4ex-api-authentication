const mongoose = require('../mongoose')

const Schema = mongoose.Schema

const ConnectedIdentitySchema = new Schema({
  provider: String,
  id: String,
  token: String
})

const ConnectedIdentity = mongoose.model('ConnectedIdentity', ConnectedIdentitySchema)

module.exports = {
  ConnectedIdentity,
  ConnectedIdentitySchema
}
