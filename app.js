const cmder = require('commander');
const mongoose = require('mongoose');
const passwordSchema = require('./models/password');
const bcrypt = require('bcryptjs');
var CryptoJS = require("crypto-js");
 
mongoose.Promise = global.Promise;  //Just to remove the warning

//db connection
const db = mongoose.connect('mongodb://localhost:27017/passwordhash',
    {
        useMongoClient: true
    });

const Password = mongoose.model('Password');

//Add a password
const addPassword = (website ,password, secretKey) => {
    const encrypt = new Password();
    encrypt.password = CryptoJS.AES.encrypt(password, secretKey);
    encrypt.website = website;
    encrypt.save((err) => {
        if(err) throw err;
        console.log("Successfully added to the database.");
        db.close();
    });
};

//View a password
const showPassword = (website, secretKey) => {
    Password.findOne({'website': website}, (err, password) => {
        if(err) throw err;
        const bytes  = CryptoJS.AES.decrypt(password.password.toString(), 
        secretKey);
        const decrypt = bytes.toString(CryptoJS.enc.Utf8);
        console.log('Password for ' + website + ' is ' + decrypt + " .");
        db.close();
    });
}

module.exports = {addPassword, showPassword}

