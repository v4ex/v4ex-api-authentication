const { IdentitySchema } = require('../identity')
const { AuthenticationSchema } = require('../authentication')

require('mongoose-type-email')

IdentitySchema.plugin(schema => {
  schema.path('email', mongoose.SchemaTypes.Email)
})

AuthenticationSchema.plugin(schema => {
  schema.path('email', mongoose.SchemaTypes.Email)
})
