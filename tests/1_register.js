const { register } = require('../lib/register')


module.exports = () => describe('lib', () => {
  describe('register.js', () => {
    describe('register()', () => {
      
      jest.setTimeout(20000)

      // #1
      test('username:password', done => {
        const username = 'v4ex'
        const password = 'v4ex.com'
        register(username, password, (err, authentication) => {
          console.log(`authentication`, authentication)
          done()
        })
      })

    })
  })
})
