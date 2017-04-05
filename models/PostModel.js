var mongoose = require('mongoose');
var User = require('./UserModel.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

var postSchema = new Schema({
    "author": {
        type: ObjectId,
        ref: User
    },
    "createdAt": Date,
    "message": String
}, { collection: 'posts' });

module.exports = mongoose.model('Post', postSchema);