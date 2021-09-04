const { login } = require('../lib/login')


module.exports = () => describe('lib', () => {
  describe('login.js', () => {
    describe('login()', () => {
      
      jest.setTimeout(20000)

      // #1
      test('username:correctPassword', done => {
        const username = 'v4ex'
        const password = 'v4ex.com'
        login(username, password, (err, token) => {
          expect(token).toBeTruthy()
          console.log(`token`, token)
          done()
        })
      })

      // #2
      test('username:wrongPassword', done => {
        const username = 'v4ex'
        const password = 'v4ex.net'
        login(username, password, (err, token) => {
          expect(token).toBeFalsy()
          done()
        })
      })

    })
  })
})
