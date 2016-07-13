/* 
 *  @author : Kavya
 * @purpose : DB
 */

var userTable = require('../models/userTable.js'),
        path = require('path');
var usert = new userTable();
exports.renderIndexPage = function (req, res) {
    res.sendFile(path.join(__dirname + '../../../public/views/index.html'));
    //__dirname : It will resolve to your project folder.
};

exports.addUserDetails = function (req, res) {
    usert.name = req.body.name;
    usert.phone = req.body.phone;
    usert.email = req.body.email;
    usert.address = req.body.address;

    usert.save(function (err, usrObj) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(usrObj);
        }
    });
};
exports.getUserDetails = function (req, res) {
    userTable.find(function (err, usrObj) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.send(usrObj);
        }
    });
};
exports.getUserById = function (req, res) {
    userTable.find({email: req.params.id}, function (err, usrObj) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            console.log(usrObj.length, 'nnaif');
            if (usrObj.length)
                res.send({status: 1, data: usrObj[0]});
            else
                res.send({status: 0, data: {}});
        }
    });
};

exports.deleteUser = function (req, res) {
    userTable.remove({email: req.params.id}, function (err, obj) {
        if (err) {
            console.log('Error occured', err);
            res.status('Error occured').send(err);
        } else {
            res.send(obj.result);
        }

    });

};

exports.updateUser = function (req, res) {
    userTable.name = req.body.name;
    userTable.email = req.body.email;
    userTable.password = req.body.password;
    console.log(req.params.id,'dusaiofj');
    userTable.update({email: req.params.id},{$set:{phone:req.body.phone,name:req.body.name,address:req.body.address}},function(err,obj){
        if(err){
            console.log('Error occured',err);
            res.status('Error occured').send(err);
        }else{
            console.log(obj,'update obbj');
            res.send(obj);
        }
        
    });
    
};