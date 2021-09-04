require('./username')
const { Identity } = require('../identity')
const { Authentication } = require('../authentication')

const mongoose = Identity.base

beforeAll(() => {
  jest.setTimeout(20000)
})

afterAll(() => {
  mongoose.connection.close()
})

describe('models', () => {
  describe('identity', () => {
    describe('username.js', () => {

      jest.setTimeout(20000)

      // #1
      test('Remove all Identities', done => {
        Identity.deleteMany({}, done)
      })

      // #2
      test('Add an Identity with username', done => {

        Identity.create({
          username: 'v4ex'
        }, done)
        
      })

      // #3
      test('Remove all Authentications', done => {
        Authentication.deleteMany({}, done)
      })

      // #4
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
