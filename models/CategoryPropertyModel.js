var mongoose = require('mongoose');
var Word = require('./WordModel.js');
var Vote = require('./VoteModel.js');
var User = require('./UserModel.js');
var PostInfo = require('./PostModel.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

var CategoryPropertySchema = new Schema({
    "names": [{
        word: {
            type: ObjectId,
            ref: Word
        },
        nameApproval: [Vote.schema],
        "creationInfo": PostInfo.schema
    }],
    "dataType": {
        type: String,
        enum: [
            "String",
            "Number",
            "Date",
            "TimeSpan",
            "Category",
            "Topic",
            "User",
            "URL",
            "Geodata",
            "Rating"
        ],
    },
    isArray: Boolean,
    isOrderedArray: Boolean,
    hasNamedElements: Boolean,
    topicCategoryId: ObjectId,
    "dataConstraints": Array,
    "author": User.schema,
    "creationDate": Date,
    "propertyApproval": [Vote.schema]
}, { collection: 'categoryproperties' });

module.exports = mongoose.model('CategoryProperty', CategoryPropertySchema);