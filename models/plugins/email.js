// TODO

const { IdentitySchema } = require('../identity')
const { AuthenticationSchema } = require('../authentication')

require('mongoose-type-email')

const mongoose = require('../../mongoose')


module.exports = {
  config: () => {
    IdentitySchema.plugin(schema => {
      schema.path('email', { type: mongoose.SchemaTypes.Email, unique: true })
    })

    AuthenticationSchema.plugin(schema => {
      schema.path('email', mongoose.SchemaTypes.Email)
    })
  }
}
