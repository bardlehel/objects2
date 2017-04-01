/**
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

var connectWithRetry = function() {

    console.log(config.mongodb);
    return mongoose.connect(config.mongodb);
    /*, {server:{auto_reconnect:true}}, function(err) {

            if (err) {

                console.error('No connection to MongoDB server - retrying in 5 sec', err);

                mongoose.disconnect();

                setTimeout(connectWithRetry, 5000);

            }

        })*/
};



module.exports = connectWithRetry();