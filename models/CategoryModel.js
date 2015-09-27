var mongoose = require('mongoose');
var Word = require('./WordModel.js');
var Vote = require('./VoteModel.js');
var CategoryParentAssociation = require('./CategoryAssociationModel.js');
var CategoryPropertyAssociation = require('./CategoryPropertyAssociationModel.js');
var Schema   = mongoose.Schema;
var ObjectId =  mongoose.Schema.ObjectId;

var CategorySchema = new Schema({
	"names" : [{
		word: {
			type: ObjectId,
			ref: Word
		},
        votes: [Vote]
	}],
	"parents" : [CategoryParentAssociation],
	"properties" : [CategoryPropertyAssociation],
	"votes" : [Vote]
});

module.exports = mongoose.model('Category', CategorySchema);