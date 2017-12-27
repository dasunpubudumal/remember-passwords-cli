const mongoose = require('mongoose');
const Password = mongoose.Schema(
    {
        website: {type: String},
        password: {type: String}
    }
);
const bcrypt = require('bcryptjs');

module.exports = mongoose.model('Password', Password);
