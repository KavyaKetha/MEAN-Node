/* 
 *  @author : Kavya
 * @purpose : Routing the requests  * 
 */
var controllers = require('../controllers/server.controller.js');
module.exports = function (app,apiRoutes) {
    app.route('/').get(controllers.renderIndexPage);
    app.route('/login').post(controllers.generateWebToken);
    apiRoutes.route('/user').post(controllers.addUser);
    
};

