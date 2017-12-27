const program = require('commander');
const {prompt} = require('inquirer');
const {addPassword, showPassword, removePassword, editPassword} = require('./models/password');
const {AddInquiries,EditInquiries, RemoveInquiries, ShowInquiries} = require('./inquiries');

//Version check.
program
    .version('1.0.0')
    .description('Password Storing System');

//Add new password.
program
    .command('add')
    .alias('a')
    .description('Add a password')
    .action(() => {
        prompt(AddInquiries).then(answers => addPassword(answers.website, answers.password, answers.secretKey));
    });

//Show password
program
    .command('show')
    .alias('s')
    .description('Show a password')
    .action(() => {
        prompt(ShowInquiries).then(answers => showPassword(answers.website, answers.secretKey));
    });

//Remove password.
program
    .command('remove')
    .alias('r')
    .description('Remove a password')
    .action(() => {
        prompt(RemoveInquiries).then( answers => removePassword(answers.website, answers.secretKey));
    });

program
    .command('edit')
    .alias('u')
    .description('Edit a password')
    // .action((website, password, newPassword, secret) => {
    //     editPassword(website, password, newPassword, secret);
    // });
    .action(() => {
        prompt(EditInquiries).then( answers => editPassword(answers.website, answers.password, answers.newPassword, answers.secretKey
        ));
    });

program.parse(process.argv);