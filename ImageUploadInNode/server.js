/* 
 *  @author : Kavya
 * @purpose : Create server  * 
 */

var express = require('express'),
        bodyparser = require('body-parser'),
        morgan = require('morgan'),
        port = 3010,
        app = express();

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
