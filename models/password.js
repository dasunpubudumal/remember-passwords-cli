//Mongodb ORM
const mongoose = require('mongoose');
const inquirer = require('inquirer');

mongoose.Promise = global.Promise;  //Just to remove the warning

//db connection
const db = mongoose.connect('mongodb://localhost:27017/passwordhash',
    {
        useMongoClient: true
});

//Schema
const HashSchema = mongoose.Schema(
    {
        website: {type: String},
        password: {type: String}
    }
);

//Used to encrypt-dectrypt passwords.
const CryptoJS = require("crypto-js");

//HashModel Model through which we access the database.
//First Parameter is the collection in the database.
const HashModel  = mongoose.model('Password', HashSchema);

//Add a password
const addPassword = (website ,password, secretKey) => {
    const encrypt = new HashModel();
    encrypt.password = CryptoJS.AES.encrypt(password, secretKey);
    encrypt.website = website.toLowerCase();
    encrypt.save((err) => {
        if(err) throw err;
        console.log("Successfully added to the database.");
        db.close();
    });
};

//View a password
const showPassword = (website, secretKey) => {
    HashModel.findOne({'website': website.toLowerCase()}, (err, password) => {
        if(err) throw err;
        if(!password) {console.log('Incorrect Information!'); db.close();}
        else{
            const bytes  = CryptoJS.AES.decrypt(password.password.toString(), 
            secretKey);
            const decrypt = bytes.toString(CryptoJS.enc.Utf8);
            if(decrypt == '' || decrypt == null) {
                console.log("Incorrect Information!");
                db.close();
            } 
            else{
                console.info('Password for ' + website + ' is ' + decrypt + ".");
                db.close();
            }
        }
       
    });
};

//Remove a password
const removePassword = (website, secretKey) => {
    HashModel.findOne({'website': website}, (err, password) => {
        if(err) throw err;
        if(!password){console.log("Incorrect Information!"); db.close();}
        else{
            if(err) throw err;
            password.remove((err) => {
            if(err) throw err;
            console.log("HashModel Removed.");
            db.close();
        });
        }
    });
};

//Update password
const editPassword = (website, password, newPassword, secretKey) => {
    HashModel.findOne({'website': website.toLowerCase()}, (err, password) => {
        if(err) throw err;
        if(!password){console.log("Incorrect Information!"); db.close();}
        else{
            password.password = CryptoJS.AES.encrypt(newPassword, secretKey);
            password.website = website;
            password.save((err) => {
            if(err) throw err;
            console.log("Password updated.");
            db.close();
        });
        }
    });
};

module.exports = {addPassword, editPassword, showPassword, removePassword}

