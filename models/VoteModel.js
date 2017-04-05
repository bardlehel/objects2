var mongoose = require('mongoose');
var User = require('./UserModel');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;


var VoteSchema = new Schema({
    vote: Number,
    voter: {
        type: ObjectId,
        ref: User
    },
    votedAt: Date
}, { collection: 'votes' });

module.exports = mongoose.model('Vote', VoteSchema);