var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var languageSchema = new Schema({
    "englishName": String
}, { collection: 'languages' });

module.exports = mongoose.model('Language', languageSchema);