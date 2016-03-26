/* 
 *  @author : Kavya
 * @purpose : Passport authentication controller  * 
 */
var LocalStrategy = require('passport-local').Strategy,
        GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
        credentialss = require('../config/credentials.js');
var User= require('../models/server.model');
module.exports = function (passport) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        console.log('here in local login');
        return done(null,'hello');

    }));
    passport.use(new GoogleStrategy({
        clientID: credentialss.googleAuth.clientID,
        clientSecret: credentialss.googleAuth.clientSecret,
        callbackURL: credentialss.googleAuth.callbackURL,
    }, function (token, refreshToken, profile, done) {
        console.log('in google auth',profile);
        return done(null,profile);
    }));
};