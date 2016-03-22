/* 
 *  @author : Kavya
 * @purpose : Routing the requests  * 
 */
var controllers    = require('../controllers/server.controller.js');
module.exports = function(app){
    app.get('/',controllers.renderIndexPage);
    app.post('/saveData',controllers.savingToDB);
};

