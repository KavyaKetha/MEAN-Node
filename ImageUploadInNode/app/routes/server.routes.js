/* 
 *  @author : Kavya
 * @purpose : Routing the requests  * 
 */
var controllers = require('../controllers/server.controller.js');
module.exports = function (app) {
    app.route('/').get(controllers.renderIndexPage);
    app.route('/saveImage').post(controllers.addUserDetails);
    
};

