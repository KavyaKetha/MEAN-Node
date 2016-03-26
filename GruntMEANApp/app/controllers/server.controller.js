/* 
 *  @author : Kavya
 * @purpose : MongoDB Operations * 
 */

var path = require('path');
//    UserData = require('../models/server.model.js');
exports.renderIndexPage = function (req, res) {
    res.sendFile(path.join(__dirname + '../../../public/views/index.html'));
    //__dirname : It will resolve to your project folder.
};
exports.addUser = function (req, res) {
//    var userObj = new UserData();
//    userObj.name = req.body.name;
//    userObj.email = req.body.email;
//    userObj.password = req.body.password;
//    userObj.save(function(err,obj){
//        if(err){
//            console.log('Error occured',err);
//            res.send({error:err});
//        }else{
//            console.log('created object',obj);
//            res.send(obj);
//        }
//        
//    });
    
};
exports.updateUser = function (req, res) {
//    UserData.name = req.body.name;
//    UserData.email = req.body.email;
//    UserData.password = req.body.password;
//    UserData.update({email:req.body.email},{$set:{password:req.body.password,name:req.body.name}},function(err,obj){
//        if(err){
//            console.log('Error occured',err);
//            res.status('Error occured').send(err);
//        }else{
//            res.send(obj);
//        }
//        
//    });
    
};
exports.viewUser = function (req, res) {
//    UserData.find({email:req.param('email')},function(err,obj){
//        if(err){
//            console.log('Error occured',err);
//            res.status('Error occured').send(err);
//        }else{
//            console.log(obj,'view user');
//            res.send(obj);;
//        }
//        
//    });
    
};
exports.deleteUser = function (req, res) {
//    UserData.remove({email:req.param('email')},function(err,obj){
//        if(err){
//            console.log('Error occured',err);
//            res.status('Error occured').send(err);
//        }else{
//            console.log(obj,'view user');
//            res.send(obj);;
//        }
//        
//    });
    
}