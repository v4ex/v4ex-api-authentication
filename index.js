const mongoose = require('./mongoose')

const { Identity, IdentitySchema } = require('./models/identity')
const { Authentication, AuthenticationSchema, ConnectedRecognitionSchema } = require('./models/authentication')
const { Token, TokenSchema } = require('./models/token')

const { register } = require('./lib/register')
const { login } = require('./lib/login')
const { authenticate } = require('./lib/authenticate')


module.exports = {
  mongoose,
  Identity,
  IdentitySchema,
  Authentication,
  AuthenticationSchema,
  ConnectedRecognitionSchema,
  Token,
  TokenSchema,
  register,
  login,
  authenticate
}
