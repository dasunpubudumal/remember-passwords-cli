const program = require('commander');
const {addPassword, showPassword, removePassword, editPassword} = require('./app');

//Version check.
program
    .version('1.0.0')
    .description('Password Storing System');

//Add new password.
program
    .command('add <website> <password> <secret>')
    .alias('a')
    .description('Add a password')
    .action((website, password, secret) => {
        addPassword(website, password, secret);
    });

//Show password
program
    .command('show <website> <secret>')
    .alias('s')
    .description('Show a password')
    .action((website, secret) => {
        showPassword(website, secret);
    });

//Remove password.
program
    .command('remove <website> <secret>')
    .alias('r')
    .description('Remove a password')
    .action((website, password) => {
        removePassword(website, password);
    });

program
    .command('edit <website> <password> <newPassword> <secret>')
    .alias('u')
    .description('Edit a password')
    .action((website, password, newPassword, secret) => {
        editPassword(website, password, newPassword, secret);
    });
program.parse(process.argv);