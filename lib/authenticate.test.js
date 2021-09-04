const mongoose = require('../mongoose')

const { authenticate } = require('./authenticate')

afterAll(() => {
  mongoose.connection.close()
})


describe('lib', () => {
  describe('authenticate.js', () => {
    describe('authenticate()', () => {
      
      jest.setTimeout(20000)

      // #1
      test('token', done => {
        authenticate('1630760395207', (err, token) => {
          console.log(token)
          done()
        })
      })

    })
  })
})