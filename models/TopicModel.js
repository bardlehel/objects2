var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');
require('mongoose-type-url');
var WordSchema = require('./WordModel.js').schema;
var PostInfoSchema = require('./common-schemas/PostInfoSchema.js');
var VoteSchema = require('./common-schemas/VoteSchema.js');
var CategorySchema = require('./CategoryModel.js').schema;
var CategoryPropertySchema = require('./CategoryPropertyModel.js').schema;
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;


var MessageBoardTopicSchema = new Schema({
    "posts": [PostInfoSchema],
    "subject": String
});

var MessageBoardSchema = new Schema({
    "messageBoardTopics": [MessageBoardTopicSchema]
});

var TopicSchema = new Schema({
    "names": [{
        word: {
            type: ObjectId,
            ref: WordSchema
        },
        nameApproval: [VoteSchema],
        "creationInfo": PostInfoSchema
    }],
    "is": [{
        category: {
            type: ObjectId,
            ref: CategorySchema
        },
        categoryApproval: [VoteSchema],
        creationInfo: PostInfoSchema
    }],
    "has": [{
        property: {
            type: ObjectId,
            ref: CategoryPropertySchema
        },

        values: [{
            valueArray: [{ //holds single value or if array then multiple values
                valueString: String,
                valueNumber: Number,
                valueDate: Date,
                valueURL: mongoose.SchemaTypes.Url,
                valueObject: ObjectId,
                valueGeodata: mongoose.Schema.Types.GeoJSON,
                valueRating: [VoteSchema],
                valueName: String //for named elements
            }],
            propertyValueApproval: [VoteSchema],
            "creationInfo": PostInfoSchema
        }],

    }],
    "topicApproval": [VoteSchema],
    "creationInfo": PostInfoSchema,
    "topicDiscussionBoard": MessageBoardSchema
}, { collection: 'topics' });

module.exports = mongoose.model('Topic', TopicSchema);