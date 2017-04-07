var mongoose = require('mongoose');
var LanguageSchema = require('./LanguageModel.js').schema;
var VoteSchema = require('./common-schemas/VoteSchema.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

var wordSchema = new Schema({
    "spelling": String,
    "language": {
        type: ObjectId,
        ref: LanguageSchema
    },
    "wordApproval": [VoteSchema]
}, { collection: 'words' });

module.exports = mongoose.model('Word', wordSchema);