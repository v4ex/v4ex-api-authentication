const mongoose = require('./mongoose')


const { Identity, IdentitySchema } = require('./models/identity')
const { Authentication, AuthenticationSchema } = require('./models/authentication')
const { ConnectedAuthentication, ConnectedAuthenticationSchema } = require('./models/connected-authentication')
const { Token, TokenSchema } = require('./models/token')

const plugins = {
  username: require('./models/plugins/username'),
  email: require('./models/plugins/email')
}

const { register } = require('./lib/register')
const { login } = require('./lib/login')
const { authenticate } = require('./lib/authenticate')
const { logout } = require('./lib/logout')

const authentication = {
  register,
  login,
  authenticate,
  logout
}


module.exports = {
  mongoose,
  Identity,
  IdentitySchema,
  Authentication,
  AuthenticationSchema,
  ConnectedAuthentication,
  ConnectedAuthenticationSchema,
  Token,
  TokenSchema,
  plugins,
  authentication
}
