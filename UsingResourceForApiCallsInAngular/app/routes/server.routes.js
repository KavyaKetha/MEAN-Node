/* 
 *  @author : Kavya
 * @purpose : Routing the requests  * 
 */
var controllers = require('../controllers/server.controller.js');
module.exports = function (app) {
    app.route('/').get(controllers.renderIndexPage);
    app.get('/user', controllers.getUserDetails);
    app.get('/user/:id', controllers.getUserById);
    app.post('/user', controllers.addUserDetails);
    app.put('/user/:id', controllers.updateUser);
    app.delete('/user/:id', controllers.deleteUser);
};

