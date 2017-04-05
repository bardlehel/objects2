var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    "email": String,
    "password": String,
    "joinDate": Date,
    "userName": String,
    "firstName": String,
    "lastName": String,
    "mainPhotoURL": String,
    "role": String //basic, moderator, superuser
}, { collection: 'users' });

module.exports = mongoose.model('User', UserSchema);