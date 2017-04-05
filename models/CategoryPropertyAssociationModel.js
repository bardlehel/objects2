var mongoose = require('mongoose');
var Vote = require('./VoteModel.js');
var PostInfo = require('./PostModel');
var CategoryProperty = require('./CategoryPropertyModel.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

var CategoryPropertyAssociationSchema = new Schema({
    "categoryProperty": {
        type: ObjectId,
        ref: CategoryProperty
    },
    "propertyAssociationApproval": [Vote.schema],
    "creationInfo": PostInfo.schema
}, { collection: 'categorypropertyassociations' });

module.exports = mongoose.model('CategoryPropertyAssociation', CategoryPropertyAssociationSchema);