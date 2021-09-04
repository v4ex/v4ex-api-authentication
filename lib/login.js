// Login a self-claimed identity and issue token.

const { Authentication } = require('../models/authentication')
const { Token } = require('../models/token')
require('../models/plugin/username')

const bcrypt = require('bcrypt')

const login = (username, password, callback) => {
  Authentication.findOne({
    username
  }, (err, authentication) => {
    bcrypt.compare(password, authentication.password, (err, result) => {
      if (result) {
        const expire = new Date()
        expire.setTime(expire.getTime() + 60 * 60 * 1000)
  
        Token.create({
          identity: authentication.identity,
          token: Date.now(), // TODO
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
