var mongoose = require('mongoose');
var Word = require('./WordModel.js');
var Vote = require('./VoteModel.js');
var PostInfo = require('./PostModel.js');
var CategoryParentAssociation = require('./CategoryAssociationModel.js');
var CategoryPropertyAssociation = require('./CategoryPropertyAssociationModel.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

var CategorySchema = new Schema({
    "names": [{
        word: {
            type: ObjectId,
            ref: Word
        },
        nameApproval: [Vote],
        "creationInfo": PostInfo
    }],
    "parents": [CategoryParentAssociation],
    "properties": [CategoryPropertyAssociation],
    "categoryApproval": [Vote],
    "creationInfo": PostInfo
});

module.exports = mongoose.model('Category', CategorySchema);