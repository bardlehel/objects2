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
        nameApproval: [Vote.schema],
        "creationInfo": PostInfo.schema
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
        valueRating: [Vote.schema],
        propertyValueApproval: [Vote.schema],
        "creationInfo": PostInfo.schema
    }],
    "topicApproval": [Vote.schema],
    "creationInfo": PostInfo.schema
});

module.exports = mongoose.model('Topic', TopicSchema);