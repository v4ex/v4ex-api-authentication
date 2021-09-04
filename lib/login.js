// Login a self-claimed identity and issue token.

const { Authentication } = require('../models/authentication')
const { Token } = require('../models/token')

require('../models/plugin/username')


const login = (username, password, callback) => {
  Authentication.findOne({
    username
  }, (err, authentication) => {
    if (authentication.password === password) { // TODO
      const expire = new Date()
      expire.setTime(expire.getTime() + 60 * 60 * 1000)

      Token.create({
        identity: authentication.identity,
        token: Date.now(), // TODO
        expire
      }, callback)
    }
  })
}

module.exports = {
  login
}
