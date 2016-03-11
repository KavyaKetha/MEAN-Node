/* 
 * @author : Kavya
 * @purpose : Creating  listener server in node using express
 */

var express = require('express'),
    port = 3000,
    app = express(); 
/* listen creates a listener port which acts as a server*/
app.listen(port,function(){
    console.log('Server(Express) is on port',port);
});

    
