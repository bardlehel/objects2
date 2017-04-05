var mongoose = require('mongoose');
var PostInfo = require('./PostModel.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;


var messageBoardTopic = new Schema({
    "posts": [PostInfo.schema],
    "subject": String
});

var messageBoard = new Schema({
    "messageBoardTopics": [messageBoardTopic]
}, { collection: 'messageboards' });

module.exports = mongoose.model('MessageBoard', messageBoard);