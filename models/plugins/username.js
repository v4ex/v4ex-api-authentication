
module.exports = ({ Identity, Authentication }) => {
  if (Identity === undefined) Identity = require('../identity')({}).Identity
  if (Authentication === undefined) Authentication = require('../authentication')({}).Authentication

  const IdentitySchema = Identity.schema
  const AuthenticationSchema = Authentication.schema
  
  
  return {
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
}
