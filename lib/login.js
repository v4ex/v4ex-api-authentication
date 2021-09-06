// Login a self-claimed identity and issue token.


module.exports = ({ Identity, Authentication, Token, env }) => {

  if (Authentication === undefined) Authentication = require('../models/authentication')({}).Authentication
  if (Token === undefined) Token = require('../models/token')({}).Token 

  if (env === undefined) {
    require('dotenv').config()
    env = process.env
    if (env.AUTHENTICATION_TOKEN_LENGTH === undefined) {
      env.AUTHENTICATION_TOKEN_LENGTH = '32'
    }
  }

  const bcrypt = require('bcrypt')
  const crypto = require('crypto')

  const login = (username, password, callback) => {
    Authentication.findOne({
      username
    }, function(err, authentication) {
      if (err) {
        console.error(`Error in finding Authentication for ${username}`, err)
      }
      bcrypt.compare(password, authentication.password, (err, result) => {
        if (err) {
          console.error(`Error in comparing password between ${password} and ${authentication.password}`, err)
        }
        if (result) {
          const expire = new Date()
          expire.setTime(expire.getTime() + 60 * 60 * 1000)
    
          // TODO Handle unique token collide
          Token.create({
            identity: authentication.identity,
            token: crypto.randomBytes(parseInt(env.AUTHENTICATION_TOKEN_LENGTH)).toString('hex'),
            expire
          }, function(err, token) {
            if (err) {
              console.error(`Error in creating Token for Identity(${authentication.identity})`, err)
            }
            callback(err, { authentication, token })
          })
        } else {
          callback(null, false)
        }
      })
    })
  }
  
  
  return {
    login
  }

}
