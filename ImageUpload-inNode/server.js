/* 
 *  @author : Kavya
 * @purpose : Create server  * 
 */

var express = require('express'),
        bodyparser = require('body-parser'),
        mongoose = require('mongoose'),
        dbConnection = 'mongodb://localhost/meannode',
        morgan = require('morgan'),
        port = 3010,
        app = express();

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
app.use(express.static(__dirname + '/public'));
var controllers = require('./app/controllers/server.controller.js');
//requiring the routes
require('./app/routes/server.routes.js')(app);

app.listen(port, function () {
    console.log('Server on port', port);
});
module.exports = app;
