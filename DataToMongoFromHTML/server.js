/* 
 *  @author : Kavya
 * @purpose : Save Data to MongoDB from HTML  * 
 */
var express = require('express'),
        bodyparser = require('body-parser'),
        morgan = require('morgan'),
        port = 3000,
        app = express(),
        mongoose = require('mongoose'),
        dbConnection = 'mongodb://localhost/local';

mongoose.connect(dbConnection, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + dbConnection + '. ' + err);
    } else {
        console.log('Successfully connected to: ' + dbConnection);
    }
});
app.use(bodyparser.json());
app.use(morgan('dev'));
//gives the static pages access
app.use(express.static(__dirname + '/public/views'));
//requiring the routes
require('./app/routes/server.routes.js')(app);
require('./app/controllers/server.controller.js');
app.listen(port, function () {
    console.log('Server on port', port);
});
module.exports = app;

