/* 
 *  @author : Kavya
 * @purpose : Routing the requests  * 
 */
var controllers = require('../controllers/server.controller.js');
//var passportauth = require('../controllers/login.passportauth.js');
module.exports = function (app,passport) {
    app.route('/').get(controllers.renderIndexPage);
    app.route('/user').post(controllers.addUser).put(controllers.updateUser).get(controllers.viewUser).delete(controllers.deleteUser);
    app.route('/login').post(passport.authenticate('local-login', {
        successRedirect : '/success', 
        failureRedirect : '/failure', 
        failureFlash : true
    }));
//    app.route('/facebook').get(passport.authenticate('facebook',{scope:'email'}));
//    app.route('/auth/facebook/callback').get(passport.authenticate('facebook', {
//        successRedirect : '/success', 
//        failureRedirect : '/failure'
//    }));
//    app.route('/linkedin').get(passport.authenticate('linkedin', {
//        successRedirect : '/success', 
//        failureRedirect : '/failure', 
//        failureFlash : true 
//    }));
    app.route('/google').get(passport.authenticate('google', {scope:'email'}));
    app.route('/google').get(passport.authenticate('google', {
        successRedirect : '/success', 
        failureRedirect : '/failure'
    }));
//    app.route('/github').get(passport.authenticate('local-login', {
//        successRedirect : '/success', 
//        failureRedirect : '/failure', 
//        failureFlash : true 
//    }));
    app.route('/success').get(function(req,res){
        console.log('in success');
        res.send('user');
    });
    app.route('/failure').get(function(req,res){
        console.log('in failure');
        res.send('not user');
    });
};

