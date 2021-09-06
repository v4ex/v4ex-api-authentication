const { program } = require('commander')
const chalk = require('chalk')


module.exports = ({ Identity, Authentication, env }) => {

  const { register } = require('../lib/register')({ Identity, Authentication, env })
  
  // TODO Only print error in DEBUG environment
  program.command('register')
         .argument('<username>', 'username to login')
         .argument('[password]', '(optional) password paired with the username')
         .action((username, password) => {
           console.log('username:', username);
           console.log('password:', password);
           register(username, password, function(err, { identity, hash, authentication }) {
             if (err) {
              console.log(chalk.red(err))
              console.error(err)
             }
            
             console.log(authentication)
           })
         })
}


