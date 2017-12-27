const program = require('commander');
const {addPassword, showPassword} = require('./app');

program
    .version('1.0.0')
    .description('Password Storing System');

program
    .command('add <website> <password> <secret>')
    .alias('a')
    .description('Add a password')
    .action((website, password, secret) => {
        addPassword(website, password, secret);
    });

program
    .command('show <website> <secret>')
    .alias('s')
    .description('Show a password')
    .action((website, secret) => {
        showPassword(website, secret);
    });
program.parse(process.argv);