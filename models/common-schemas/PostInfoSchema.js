var mongoose = require('mongoose');
var UserSchema = require('../UserModel.js').schema;
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

module.exports = new Schema({
    "author": {
        type: ObjectId,
        ref: UserSchema
    },
    "createdAt": Date,
    "message": String
});