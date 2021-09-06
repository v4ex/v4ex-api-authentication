const { program } = require('commander')
const chalk = require('chalk')

module.exports = ({ Identity, Authentication, Token, env }) => {
  const { login } = require('../lib/login')({ Identity, Authentication, Token, env })

  program.command('login')
         .argument('<username>', 'username to login')
         .argument('<password>', 'password paired with the username')
         .action((username, password) => {
           console.log('username:', username);
           console.log('password:', password);
           login(username, password, function(err, { authentication, token }) {
             if (err) {
              console.log(chalk.red(err))
              console.error(err)
             }
            
             console.log(token)
           })
         })
}
