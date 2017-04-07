var mongoose = require('mongoose');
var UserSchema = require('../UserModel').schema;
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;


module.exports = new Schema({
    vote: Number,
    voter: {
        type: ObjectId,
        ref: UserSchema
    },
    votedAt: Date
});