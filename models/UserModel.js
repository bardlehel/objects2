var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');
require('mongoose-type-url');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.ObjectId;

var UserTopicListSchema = new Schema({
    "name": String,
    "items": [{
        "itemid": ObjectId,
        "metadata": [{
            "name": String,
            "valueType": {
                type: String,
                enum: [
                    "String",
                    "Number",
                    "Date",
                    "Category",
                    "Topic",
                    "User",
                    "URL",
                    "Geodata"
                ]
            },
            "valString": String,
            "valNumber": Number,
            "valDateTime": Date,
            "valCategory": ObjectId,
            "valTopic": ObjectId,
            "valUser": ObjectId,
            "valURL": mongoose.SchemaTypes.Url,
            "valGeodata": mongoose.Schema.Types.GeoJSON
        }]
    }]
});

var UserSchema = new Schema({
    "email": String,
    "password": String,
    "joinDate": Date,
    "userName": String,
    "firstName": String,
    "lastName": String,
    "mainPhotoURL": String,
    "role": {
        type: String,
        enum: [
            "nonmember",
            "banned",
            "basic",
            "level-1",
            "level0",
            "level1",
            "level2",
            "level3",
            "level4",
            "level5",
            "moderator",
            "admin",
            "superuser",
        ],
    },
    "topicLists": [UserTopicListSchema]
}, { collection: 'users' });

module.exports = mongoose.model('User', UserSchema);