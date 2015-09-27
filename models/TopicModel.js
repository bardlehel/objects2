var mongoose = require('mongoose');
var Word = require('./WordModel.js');
var Vote = require('./VoteModel.js');
var Category = require('./CategorModel.js');
var CategoryProperty = require('./CategoryPropertyModel.js');
var Schema   = mongoose.Schema;
var ObjectId =  mongoose.Schema.ObjectId;


var TopicSchema = new Schema({
	"names" : [{
		word: {
			type: ObjectId,
			ref: Word
		},
		votes: [Vote]
	}],
	"is" : [{
        type: ObjectId,
        ref: Category
    }],
	"has" : [{
		property: {
			type: ObjectId,
			ref: CategoryProperty
		},
		valueString: String,
        valueNumber: Number,
        valueDate: Date,
        valueArray: Array,
		votes: [Vote]
	}],
	"votes" : [Vote]
});

module.exports = mongoose.model('Topic', TopicSchema);