/* 
 *  @author : Kavya
 * @purpose : Rendering ejs file in Node.js  * 
 */

var express = require('express'),
    bodyparser = require('body-parser'),
    ejs = require('ejs'),
    morgan = require('morgan'),
    port = 3000,
    app = express();
    
app.use(bodyparser.json());
app.use(morgan('dev'));
//gives the static pages access
app.use(express.static(__dirname + '/public/views'));
//For setting the html template type to be rendered
app.set('view engine','ejs');
app.set('views','public/views');
//requiring the routes
require('./app/routes/server.routes')(app);
app.listen(port,function(){
    console.log('Server on port',port);
});
module.exports = app;  
