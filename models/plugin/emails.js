// TODO

const { IdentitySchema } = require('../identity')

require('mongoose-type-email')

IdentitySchema.plugin(schema => {
  schema.path('emails', [mongoose.SchemaTypes.Email])
})
