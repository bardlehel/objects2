var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var languageSchema = new Schema({

module.exports = mongoose.model('language', languageSchema);