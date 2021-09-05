// Logout an authenticated Identity with Token.

const { Token } = require('../models/token')


const logout = (authenticatedToken, callback) => {
  Token.findOne({
    token: authenticatedToken
  }, (err, token) => {
    if (token) {
      Token.deleteMany({
        identity: token.identity
      }, callback)
    }
  })
}


module.exports = {
  logout
}
