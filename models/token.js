
module.exports = ({ Identity, modelName }) => {
  if (Identity === undefined) Identity = require('./identity')({}).Identity
  if (modelName === undefined) modelName = 'Token'

  const mongoose = Identity.base

  let Token, TokenSchema

  if (mongoose.modelNames().includes(modelName)) {
    Token = mongoose.model(modelName)
    TokenSchema = Token.schema
  } else {
    const Schema = mongoose.Schema
    TokenSchema = new Schema({
      identity: { type: mongoose.ObjectId, ref: Identity, required: true },
      token: { type: String, required: true, unique: true },
      expire: Date
    })
    Token = mongoose.model(modelName, TokenSchema)
  }


  return {
    Token,
    TokenSchema
  }
}
