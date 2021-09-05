// Login a self-claimed identity and issue token.

require('dotenv').config()

const { Authentication } = require('../models/authentication')
const { Token } = require('../models/token')
require('../models/plugins/username').config()

const bcrypt = require('bcrypt')
const crypto = require('crypto')


const login = (username, password, callback) => {
  Authentication.findOne({
    username
  }, (err, authentication) => {
    bcrypt.compare(password, authentication.password, (err, result) => {
      if (result) {
        const expire = new Date()
        expire.setTime(expire.getTime() + 60 * 60 * 1000)
  
        // TODO Handle unique token collide
        Token.create({
          identity: authentication.identity,
          token: crypto.randomBytes(parseInt(process.env.AUTHENTICATION_TOKEN_LENGTH || 32)).toString('hex'),
          expire
        }, callback)
      } else {
        callback(null, false)
      }
    })
  })
}


module.exports = {
  login
}
