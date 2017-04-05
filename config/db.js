"use strict";
/**
 * Created by RebeccaGennette on 11/27/2015.
 */
var USE_DB_DEFAULT = 0;
var USE_DB_LOCAL = USE_DB_DEFAULT;
var USE_DB_MLAB = 1;
//set db to which host mongodb is to be connected to
var db = USE_DB_LOCAL;

var config;
if (db === USE_DB_MLAB) {
    config = require('./db/mlab');
} else { //
    config = require('./db/local');
}

var mongoose = require('mongoose');

var dbConnection = {};

dbConnection.connectWithRetry = function() {
    console.log("mongo connection string: " + config.mongodb);
    mongoose.Promise = global.Promise;
    return mongoose.connect(config.mongodb, { server: { auto_reconnect: true } }, function(err) {
        if (err) {
            console.error('No connection to MongoDB server - retrying in 5 sec', err);
            mongoose.disconnect();
            setTimeout(dbConnection.connectWithRetry, 5000);
        }
    });
};

dbConnection.closeConnection = function() {
    mongoose.connection.close();
};


module.exports = dbConnection;