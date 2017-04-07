"use strict";
var express = require('express');
var engines = require('consolidate');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon')
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

var dbConnection = require('./config/db');
var authConfig = require('./config/auth');

//connect to databases
dbConnection.connectWithRetry();

//configure passport authentication system
authConfig.configureBasicAuth(app);

var routes = require('./routes/index');
var users = require('./routes/users');
var languages = require('./routes/languages');
var words = require('./routes/words');
var categories = require('./routes/categorys');
var topics = require('./routes/topics');


// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({
    extended: true
}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', routes);
app.use('/api/users', users);
app.use('/api/languages/', languages);
app.use('/api/words/', words);
app.use('/api/categories/', categories);
app.use('/api/topics/', topics);

app.get('/favicon.ico', function(req, res) {
    res.send(204);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: {}
    });
});

//handle exit
process.on('exit', function() {
    dbConnection.closeConnection();
    console.log('ksg api service exiting!');
});

module.exports = app;