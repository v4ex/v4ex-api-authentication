const mongoose = require('./mongoose')

const { Identity, IdentitySchema } = require('./models/identity')
const { Authentication, AuthenticationSchema } = require('./models/authentication')
const { ConnectedAuthentication, ConnectedAuthenticationSchema } = require('./models/connected-authentication')
const { Token, TokenSchema } = require('./models/token')

const { register } = require('./lib/register')
const { login } = require('./lib/login')
const { logout } = require('./lib/logout')
const { authenticate } = require('./lib/authenticate')

const usernamePlugin = require('./models/plugins/username')
const emailPlugin = require('./models/plugins/email')


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
  register,
  login,
  logout,
  authenticate,
  usernamePlugin,
  emailPlugin
}
