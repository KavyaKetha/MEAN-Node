/* 
 *  @author : Kavya
 * @purpose : Generating tokens for authentication  * 
 */

var express = require('express'),
        bodyparser = require('body-parser'),
        morgan = require('morgan'),
        port = 3010,
        app = express(),
        path    = require('path');

app.use(bodyparser.json());
app.use(morgan('dev'));
//gives the static pages access
app.use(express.static(__dirname + '/public'));
//requiring the routes
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/public/views/index.html'));
})
app.listen(port, function () {
    console.log('Server on port', port);
});
module.exports = app;
