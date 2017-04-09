var mongoose = require('mongoose');
var WordSchema = require('./WordModel.js').schema;
var VoteSchema = require('./common-schemas/VoteSchema.js');
var UserSchema = require('./UserModel.js').schema;
var PostInfoSchema = require('./common-schemas/PostInfoSchema.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

var CategoryPropertySchema = new Schema({
    "names": [{
        "word": {
            type: ObjectId,
            ref: WordSchema
        },
        "nameApproval": [VoteSchema],
        "creationInfo": PostInfoSchema
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
    "author": UserSchema,
    "creationDate": Date,
    "propertyApproval": [VoteSchema]
}, { collection: 'categoryproperties' });

module.exports = mongoose.model('CategoryProperty', CategoryPropertySchema);