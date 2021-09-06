// Register: create an Identity.
// Provide Username, Email for Identity.
// Create a new document modelling Authentication in database.


module.exports = ({ Identity, Authentication, env }) => {
  if (Identity === undefined) Identity = require('../models/identity')({}).Identity
  if (Authentication === undefined) Authentication = require('../models/authentication')({}).Authentication
  if (env === undefined) {
    require('dotenv').config()
    env = process.env
    if (env.AUTHENTICATION_PASSWORD_SALT === undefined) {
      env.AUTHENTICATION_PASSWORD_SALT = '10'
    }
  }

  require('../models/plugins/username')({ Identity, Authentication }).config() // Add 'username' to Identity and Authentication
  
  const bcrypt = require('bcrypt')
  
  const { ERRORS, errors } = require('./error')
  
  const register = (username, password, callback) => {
    Identity.create({
      username
    }, function(err, identity) {
      if (err) {
        if (err.name === 'MongoServerError'
          && err.code === 11000
          && err.keyValue.username === username
        ) {
          return callback(errors[ERRORS.REGISTER_DUPLICATE_USERNAME](username))
        }
        console.error(`Error in creating new Identity for "${username}".`, err)
        return callback(err)
      }
      bcrypt.hash(password, parseInt(env.AUTHENTICATION_PASSWORD_SALT), (err, hash) => {
        if (err) {
          console.error(`Error in bcrypt.hash()`, err)
          return callback(err)
        }
        Authentication.create({
          identity: identity._id,
          username,
          password: hash
        }, function(err, authentication) {
          if (err) {
            console.error(`Error in creating new Authentication for "${username}".`, err)
            return callback(err)
          }
          callback(null, identity, hash, authentication)
        })
      })
    })
  }
  
  
  return {
    register
  }
}
