// Login a self-claimed identity and issue token.

const { Authentication } = require('../models/authentication')
const { Token } = require('../models/token')

require('../models/plugin/username')


const login = (username, password, callback) => {
  Authentication.findOne({
    username
  }, (err, authentication) => {
    if (authentication.password === password) {
      Token.findOneAndUpdate({
        identity: authentication.identity
      }, {
        $set: {
          token: new Date()
        }
      }, {
        new: true,
        upsert: true
      }, callback)
    }
  })
}

module.exports = {
  login
}
