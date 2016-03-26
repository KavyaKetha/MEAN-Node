/* 
 *  @author : Kavya
 * @purpose : MongoDB Operations * 
 */

var path = require('path');
exports.renderIndexPage = function (req, res) {
    res.sendFile(path.join(__dirname + '../../../public/views/index.html'));
    //__dirname : It will resolve to your project folder.
};
