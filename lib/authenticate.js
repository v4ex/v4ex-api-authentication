// Retrieve Identity by checking the Token.

const { Identity } = require('../models/identity')
const { Token } = require('../models/token')


const authenticate = (token, callback) => {
  Token.findOne({
    token
  })
    .populate('identity')
    .exec(callback)
}


module.exports = {
  authenticate
}
