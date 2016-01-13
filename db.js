/**
/**
 * Created by RebeccaGennette on 11/27/2015.
 */

var config = require('./config/default');
var mongoose = require('mongoose');

var connectWithRetry = function() {

    console.log(config.mongodb);
    return mongoose.connect(config.mongodb);/*, {server:{auto_reconnect:true}}, function(err) {

        if (err) {

            console.error('No connection to MongoDB server - retrying in 5 sec', err);

            mongoose.disconnect();

            setTimeout(connectWithRetry, 5000);

        }

    })*/
};



module.exports = connectWithRetry();
