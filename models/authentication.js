
module.exports = ({ Identity, modelName }) => {
  if (Identity === undefined) Identity = require('./identity')({}).Identity
  if (modelName === undefined) modelName = 'Authentication'

  const mongoose = Identity.base
  const Schema = mongoose.Schema

  let Authentication, AuthenticationSchema

  if (mongoose.modelNames().includes(modelName)) {
    Authentication = mongoose.model(modelName)
    AuthenticationSchema = Identity.schema
  } else {
    AuthenticationSchema = new Schema({
      identity: { type: mongoose.ObjectId, ref: Identity, required: true },
      password: String
    })
    Authentication = mongoose.model(modelName, AuthenticationSchema)
  }

  
  return {
    Authentication,
    AuthenticationSchema
  }
}
