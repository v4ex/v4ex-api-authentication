const { IdentitySchema } = require('../identity')
const { AuthenticationSchema } = require('../authentication')


module.exports = {
  config: () => {
    IdentitySchema.plugin(schema => {
      // console.log(`IdentitySchema.plugin() this`, this)
      schema.path('username', { type: String, unique: true })
    })
    
    AuthenticationSchema.plugin(schema => {
      schema.path('username', String)
    })
  }
}
