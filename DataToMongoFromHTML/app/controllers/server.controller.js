/* 
 *  @author : Kavya
 * @purpose : Inserting Into MongoDB  * 
 */

var path = require('path'),
    UserData = require('../models/server.model.js');
exports.renderIndexPage = function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
}
exports.savingToDB = function (req, res) {
    console.log('in save obj');
    var userObj = new UserData();
    userObj.email = req.body.email;
    userObj.password = req.body.password;
    userObj.save();
    
}