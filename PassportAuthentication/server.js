/* 
 *  @author : Kavya
 * @purpose : Creating  RESTful APIs  * 
 */

var express = require('express'),
        bodyparser = require('body-parser'),
        morgan = require('morgan'),
        port = 3000,
        app = express(),
        mongoose = require('mongoose'),
        dbConnection = 'mongodb://localhost/meannode',
        passport = require('passport'),
        cookieParser = require('cookie-parser'),
        session      = require('express-session');

//mongoose.connect(dbConnection, function (err, res) {
//    if (err) {
//        console.log('ERROR connecting to: ' + dbConnection + '. ' + err);
//    } else {
//        console.log('Successfully connected to: ' + dbConnection);
//    }
//}); 
app.use(bodyparser.json());
app.use(morgan('dev'));


// required for passport
app.use(session({ secret: 'mysessionsecret' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(cookieParser()); // read cookies (needed for auth)

//gives the static pages access
app.use(express.static(__dirname + '/public'));
//requiring the routes
require('./app/routes/server.routes.js')(app,passport); // load our routes and pass in our app and fully configured passport
require('./app/controllers/login.passportauth.js')(passport);
app.listen(port, function () {
    console.log('Server on port', port);
});
module.exports = app;
