require('dotenv').config()

const { Identity } = require('../models/identity')
const { Authentication } = require('../models/authentication')
const { Token } = require('../models/token')
const mongoose = Identity.base

const registerTests = require('./1_register')
const loginTests = require('./2_login')
const authenticateTests = require('./3_authenticate')
const logoutTests = require('./4_logout')


beforeAll(() => {
  return Promise.all([
    Identity.deleteMany({}),
    Authentication.deleteMany({}),
    Token.deleteMany({})
  ])
})

afterAll(() => {
  mongoose.connection.close()
})

describe('Register Login Authenticate', () => {
  registerTests()
  loginTests()
  authenticateTests()
  logoutTests()
})
