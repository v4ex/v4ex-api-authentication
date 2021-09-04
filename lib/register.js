// Register: create an Identity.
// Provide Username, Email or Phone for Identity.
// Create a new document modelling Authentication in database.

const { Authentication } = require('../models/authentication')

module.exports = (data, callback) => {
  Authentication.create(data, {}, callback)
}
