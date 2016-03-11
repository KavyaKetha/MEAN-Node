/* 
 * @author : Kavya
 * @purpose : Creating  listener server in node using http-server
 */

var http = require('http'),
    port = 3000,
    app = http.createServer(); // createServer() creates a server
app.listen(port,function(){
    console.log('Server(Http) is on port',port);
});

    
