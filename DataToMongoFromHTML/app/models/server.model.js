/* 
 * Creating the Database model Schema
 * */

var mongoose = require('mongoose'),
        Schema = mongoose.Schema;
var UserSchema = new Schema({
    email   : String,
    password: String
});
var UserData = mongoose.model('UserData', UserSchema);
module.exports = UserData;