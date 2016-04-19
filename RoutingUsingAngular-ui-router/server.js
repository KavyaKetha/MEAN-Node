/* 
 *  @author : Kavya
 * @purpose : Server  * 
 */

var express = require('express'),
        bodyparser = require('body-parser'),
        morgan = require('morgan'),
        port = 3000,
        app = express();

app.use(bodyparser.json());
app.use(morgan('dev'));
//gives the static pages access
app.use(express.static(__dirname + '/public'));
//requiring the routes
require('./app/routes/server.routes.js')(app);

app.listen(port, function () {
    console.log('Server on port', port);
});
module.exports = app;
