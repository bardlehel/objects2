var mongoose = require('mongoose');
var User = require('./UserModel.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

var postSchema = new Schema({
    "author": {
        type: ObjectId,
        ref: User
    },
    "createdAt": Date
});

module.exports = mongoose.model('post', postSchema);