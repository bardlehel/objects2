var mongoose = require('mongoose');
var Category = require('./CategoryModel.js');
var Vote = require('./VoteMocdel.js');
var Schema   = mongoose.Schema;
var ObjectId =  mongoose.Schema.ObjectId;

var CategoryParentAssociationSchema = new Schema({
	"parent" : {
		type: ObjectId,
		ref: Category
	},
	"votes" : [Vote]
});

module.exports = mongoose.model('CategoryParentAssociation', CategoryParentAssociationSchema);