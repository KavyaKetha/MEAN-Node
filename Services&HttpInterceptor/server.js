/* 
 *  @author : Kavya
 * @purpose : Generating tokens for authentication  * 
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
var controllers = require('./app/controllers/server.controller.js');
var apiRoutes = express.Router(); 
apiRoutes.use(controllers.verifyToken);
app.use('/api', apiRoutes);
//requiring the routes
require('./app/routes/server.routes.js')(app,apiRoutes);

app.listen(port, function () {
    console.log('Server on port', port);
});
module.exports = app;
