const { Identity } = require('./identity')
const mongoose = Identity.base

const Schema = mongoose.Schema

const ConnectedRecognitionSchema = new Schema({
  provider: String,
  id: String,
  token: String
})

const ConnectedRecognition = mongoose.model('ConnectedRecognition', ConnectedRecognitionSchema)

module.exports = {
  ConnectedRecognition,
  ConnectedRecognitionSchema
}
