const { IdentitySchema } = require('../identity')
const { AuthenticationSchema } = require('../authentication')

IdentitySchema.plugin(schema => {
  // console.log(`IdentitySchema.plugin() this`, this)
  schema.path('username', String)
})

AuthenticationSchema.plugin(schema => {
  schema.path('username', String)
})
