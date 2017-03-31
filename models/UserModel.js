var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    "email": String,
    "password": String,
    "joinDate": Date,
    "userName": String,
    "firstName": String,
    "lastName": String,
    "mainPhotoURL": String
});

module.exports = mongoose.model('User', UserSchema);