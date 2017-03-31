var mongoose = require('mongoose');
var Word = require('./WordModel.js');
var PostInfo = require('./PostModel.js');
var Vote = require('./VoteModel.js');
var Category = require('./CategoryModel.js');
var CategoryProperty = require('./CategoryPropertyModel.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;


var TopicSchema = new Schema({
    "names": [{
        word: {
            type: ObjectId,
            ref: Word
        },
        nameApproval: [Vote],
        "creationInfo": PostInfo
    }],
    "is": [{
        type: ObjectId,
        ref: Category
    }],
    "has": [{
        property: {
            type: ObjectId,
            ref: CategoryProperty
        },
        valueString: String,
        valueNumber: Number,
        valueDate: Date,
        valueArray: Array,
        valueRating: [Vote],
        propertyValueApproval: [Vote],
        "creationInfo": PostInfo
    }],
    "topicApproval": [Vote],
    "creationInfo": PostInfo
});

module.exports = mongoose.model('Topic', TopicSchema);