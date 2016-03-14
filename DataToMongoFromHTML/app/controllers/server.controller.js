/* 
 *  @author : Kavya
 * @purpose : Inserting Into MongoDB  * 
 */

var path = require('path');
exports.renderIndexPage = function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
}
exports.savingToDB = function (req, res) {
}