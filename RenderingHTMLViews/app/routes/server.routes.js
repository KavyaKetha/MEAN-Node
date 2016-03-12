/* 
 *  @author : Kavya
 * @purpose : Rendering ejs file in Node.js  * 
 */
var path    = require('path');
module.exports = function(app){
    app.get('/',function(req,res){
        res.sendFile(path.join(__dirname+'/index.html'));
        //__dirname : It will resolve to your project folder.
    });
};