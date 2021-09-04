// Register: create an Identity.
// Provide Username, Email for Identity.
// Create a new document modelling Authentication in database.

const { Identity } = require('../models/identity')
const { Authentication } = require('../models/authentication')

require('../models/plugin/username')

const register = (username, password, callback) => {
  Identity.create({
    username
  }, (err, identity) => {
    Authentication.create({
      identity: identity._id,
      username,
      password
    }, callback)
  })
}

module.exports = {
  register
}
