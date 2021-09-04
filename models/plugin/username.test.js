require('./username')
const { Identity } = require('../identity')
const { Authentication } = require('../authentication')

const mongoose = Identity.base

beforeAll(() => {
  return Promise.all([
    Identity.deleteMany({}),
    Authentication.deleteMany({})
  ])
})

afterAll(() => {
  mongoose.connection.close()
})

describe('models', () => {
  describe('plugin', () => {
    describe('username.js', () => {

      jest.setTimeout(20000)

      // #1
      test('Add an Identity with username', done => {

        Identity.create({
          username: 'v4ex'
        }, done)
        
      })

      // #2
      test('Add an Authentication with username', done => {
        Identity.findOne({ username: 'v4ex' }, (err, identity) => {
          Authentication.create({
            identity: identity._id,
            username: 'v4ex',
            password: 'weakpassword'
          }, done)
        })
      })

    })
  })
})
