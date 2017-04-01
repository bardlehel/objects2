var mongoose = require('mongoose');
var Word = require('./WordModel.js');
var Vote = require('./VoteModel.js');
var User = require('./UserModel.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

var CategoryPropertySchema = new Schema({
    "names": [{
        word: {
            type: ObjectId,
            ref: Word
        }
    }],
    "dataType": {
        type: String,
        enum: [
            "String",
            "Number",
            "Date",
            "TimeSpan",
            "Category",
            "URL",
            "ArrayOfStrings",
            "ArrayOfNumbers",
            "ArrayOfDates",
            "ArrayOfTimeSpans",
            "ArrayOfCategories",
            "ArrayOfURLs",
            "Rating"
        ]
    },
    "dataConstraints": Array,
    "author": User.schema,
    "creationDate": Date,
    "propertyApproval": [Vote.schema]
});

module.exports = mongoose.model('CategoryProperty', CategoryPropertySchema);