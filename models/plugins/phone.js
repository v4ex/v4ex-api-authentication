// TODO

const { IdentitySchema } = require('../identity')
const { AuthenticationSchema } = require('../authentication')

IdentitySchema.plugin(schema => {
  schema.path('phone', String)
})

AuthenticationSchema.plugin(schema => {
  schema.path('phone', String)
})
