var mongoose = require('mongoose');
var User = require('./UserModel.js');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    "author": {
        type: ObjectId,
        ref: User
    },
    "createdAt": Date
});

module.exports = mongoose.model('post', postSchema);