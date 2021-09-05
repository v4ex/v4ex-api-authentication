const { login } = require('../lib/login')
const { authenticate } = require('../lib/authenticate')


module.exports = () => describe('lib', () => {
  describe('authenticate.js', () => {
    describe('authenticate()', () => {
      
      jest.setTimeout(20000)

      // #1
      test('Authenticate by token', done => {
        const username = 'v4ex'
        const password = 'v4ex.com'
        login(username, password, (loginErr, loginToken) => {
          authenticate(loginToken.token, (authenticateErr, authenticateToken) => {
            console.log(`authenticateToken`, authenticateToken)
            expect(authenticateToken).toBeTruthy()
            expect(authenticateToken.toObject().identity.username).toBe(username)
            done()
          })
        })
      })

    })
  })
})
