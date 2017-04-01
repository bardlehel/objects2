var mongoose = require('mongoose');
var Category = require('./CategoryModel.js');
var PostInfo = require('./PostModel.js');
var Vote = require('./VoteModel.js');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

var CategoryParentAssociationSchema = new Schema({
    "parent": {
        type: ObjectId,
        ref: Category
    },
    "parentAssociationApproval": [Vote.schema],
    "creationInfo": PostInfo.schema
});

module.exports = mongoose.model('CategoryParentAssociation', CategoryParentAssociationSchema);