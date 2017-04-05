var GeoJSON = require('mongoose-geojson-schema');
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

        values: [{
            valueArray: [{ //holds single value or if array then multiple values
                valueString: String,
                valueNumber: Number,
                valueDate: Date,
                valueObject: ObjectId,
                valueGeodata: mongoose.Schema.Types.GeoJSON,
                valueRating: [Vote.schema],
                valueName: String //for named elements
            }],
            propertyValueApproval: [Vote.schema],
            "creationInfo": PostInfo.schema
        }],

    }],
    "topicApproval": [Vote.schema],
    "creationInfo": PostInfo.schema
}, { collection: 'topics' });

module.exports = mongoose.model('Topic', TopicSchema);