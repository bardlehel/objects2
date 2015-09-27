var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var languageSchema = new Schema({	"englishName" : String});

module.exports = mongoose.model('language', languageSchema);