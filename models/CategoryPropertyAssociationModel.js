var mongoose = require('mongoose');
var Vote = require('./VoteModel.js');
var PostInfo = require('./PostModel');
var CategoryProperty = require('./CategoryProperty.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

var CategoryPropertyAssociationSchema = new Schema({
    "categoryProperty": {
        type: ObjectId,
        ref: CategoryProperty
    },
    "propertyAssociationApproval": [Vote],
    "creationInfo": PostInfo
});

module.exports = mongoose.model('CategoryPropertyAssociation', CategoryPropertyAssociationSchema);