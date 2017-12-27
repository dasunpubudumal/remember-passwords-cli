const AddInquiries = [
    {
        type: 'input',
        name: 'website',
        message: 'Website:'
    },
    {
        type: 'input',
        name: 'password',
        message: 'Password:'
    },
    {
        type: 'input',
        name: 'secretKey',
        message: 'Enter a secret key:'
    }
];

const ShowInquiries = [
    {
        type: 'input',
        name: 'website',
        message: 'Website:'
    },
    {
        type: 'input',
        name: 'secretKey',
        message: 'SecretKey:'
    }
];

const RemoveInquiries = [
    {
        type: 'input',
        name: 'website',
        message: 'Website:'
    },
    {
        type: 'input',
        name: 'secretKey',
        message: 'SecretKey:'
    }
];

const EditInquiries = [
    {
        type: 'input',
        name: 'website',
        message: 'Website:'
    },
    {
        type: 'input',
        name: 'password',
        message: 'Enter old password:'
    },
    {
        type: 'input',
        name: 'newPassword',
        message: 'Enter new password:'
    },
    {
        type: 'input',
        name: 'secretKey',
        message: 'SecretKey:'
    }
];

module.exports = { AddInquiries, RemoveInquiries, ShowInquiries, EditInquiries}