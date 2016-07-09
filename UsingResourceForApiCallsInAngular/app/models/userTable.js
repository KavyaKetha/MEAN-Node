/* 
 * Creating the Database model Schema
 * */

var mongoose = require('mongoose'),
        Schema = mongoose.Schema;
var UserSchema = new Schema({
    name:String,
    phone:String,
    email:String,
    address:String
});
var userTable = mongoose.model('userTable', UserSchema);
module.exports = userTable;