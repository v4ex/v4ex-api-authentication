const { program } = require('commander')

const { login } = require('../lib/login')

program.command('login')
       .argument('<username>', 'username to login')
       .argument('<password>', 'password paired with the username')
       .action((username, password) => {
         console.log('username:', username);
         console.log('password:', password);
         login(username, password, function(err, tokenDoc) {
           if (err) {
             console.log(err)
           }
          
           console.log(tokenDoc)
         })
       })
