/* 
 *  @author : Kavya
 * @purpose : Routing the requests  * 
 */
var path = require('path');
module.exports = function (app) {
    app.route('/').get(function(req,res){
        res.sendFile(path.join(__dirname + '../../../public/views/index.html'));
    });
};

