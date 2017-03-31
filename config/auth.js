//auth-config.js

var passport = require('passport'),
    //BearerStrategy = require('passport-http-bearer').Strategy;
    BasicStrategy = require('passport-http').BasicStrategy;
var User = require('./models/UserModel');

module.exports = {
    configureBasicAuth: function(app) {
            passport.use(new BasicStrategy(
                function(username, password, done) {
                    User.findOne({ username: username }, function(err, user) {
                        if (err) { return done(err); }
                        if (!user) { return done(null, false); }
                        if (user.password != password) { return done(null, false); }
                        return done(null, user);
                    });
                }
            ));
        }
        /*
          configureBearerAuth: function(app) {
              passport.use(new BearerStrategy(
                  function(token, done) {
                      User.findOne({ token: token }, function(err, user) {
                          if (err) { return done(err); }
                          if (!user) { return done(null, false); }
                          return done(null, user, { scope: 'read' });
                      });
                  }
              ));
              
          }
          */
}