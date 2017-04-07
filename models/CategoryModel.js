var mongoose = require('mongoose');
var Word = require('./WordModel.js');
var VoteSchema = require('./common-schemas/VoteSchema.js');
var PostInfoSchema = require('./common-schemas/PostInfoSchema.js');
var CategoryPropertySchema = require('./CategoryPropertyModel.js').schema;
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

var CategoryParentAssociationSchema = new Schema({
    "parent": {
        type: ObjectId,
        ref: CategorySchema
    },
    "parentAssociationApproval": [VoteSchema],
    "creationInfo": PostInfoSchema
});

var CategoryPropertyAssociationSchema = new Schema({
    "categoryProperty": {
        type: ObjectId,
        ref: CategoryPropertySchema
    },
    "propertyAssociationApproval": [VoteSchema],
    "creationInfo": PostInfoSchema
});

var CategorySchema = new Schema({
    "names": [{
        word: {
            type: ObjectId,
            ref: Word
        },
        nameApproval: [VoteSchema],
        "creationInfo": PostInfoSchema
    }],
    "parents": [CategoryParentAssociationSchema],
    "properties": [CategoryPropertyAssociationSchema],
    "categoryApproval": [VoteSchema],
    "creationInfo": PostInfoSchema,
    "canCreateTopicFrom": Boolean,
    "appSchema": Boolean, //makes this a private/locked category for applications (no voting editing of categories but topics may be created by others)
    "parentAppSchemaVersion": {
        type: ObjectId,
        ref: CategorySchema
    },
    "firstAppSchemaVersion": {
        type: ObjectId,
        ref: CategorySchema,
    }
}, { collection: 'categories' });

module.exports = mongoose.model('Category', CategorySchema);