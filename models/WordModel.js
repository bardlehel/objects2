var mongoose = require('mongoose');
var Language = require('./LanguageModel.js');
var Vote = require('./VoteModel.js');
var Schema   = mongoose.Schema;
var ObjectId =  mongoose.Schema.ObjectId;

var wordSchema = new Schema({
	"spelling" : String,
	"language": {
		type: ObjectId,
		ref: Language
	},
	"votes": [Vote]
});

module.exports = mongoose.model('word', wordSchema);