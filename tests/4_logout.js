const { login } = require('../lib/login')
const { authenticate } = require('../lib/authenticate')
const { logout } = require('../lib/logout')


module.exports = () => describe('lib', () => {
  describe('logout.js', () => {
    describe('logout()', () => {
      
      jest.setTimeout(20000)

      // #1
      test('Logout after Login and Authenticate by token', done => {
        const username = 'v4ex'
        const password = 'v4ex.com'
        login(username, password, (loginErr, loginToken) => {
          authenticate(loginToken.token, (authenticateErr, authenticateToken) => {
            console.log(`authenticateToken to be deleted`, authenticateToken)
            logout(authenticateToken.token, (logoutErr, deletedTokens) => {
              console.log(`logoutErr`, logoutErr)
              console.log(`deletedTokens`, deletedTokens)
              done()
            })
          })
        })
      })

    })
  })
})
