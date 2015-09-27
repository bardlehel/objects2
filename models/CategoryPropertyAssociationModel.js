var mongoose = require('mongoose');
var Vote = require('./VoteModel.js');
var CategoryProperty = require('./CategoryProperty.js');
var Schema   = mongoose.Schema;
var ObjectId =  mongoose.Schema.ObjectId;

var CategoryPropertyAssociationSchema = new Schema({
	"categoryProperty" : {
		type: ObjectId,
		ref: CategoryProperty
	},
	"votes" : [Vote]
});

module.exports = mongoose.model('CategoryPropertyAssociation', CategoryPropertyAssociationSchema);