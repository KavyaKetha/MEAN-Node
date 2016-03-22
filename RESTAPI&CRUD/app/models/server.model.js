/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose'),
        Schema = mongoose.Schema;
var UserSchema = new Schema({
    email   : String,
    password: String
});
mongoose.model('UserData', UserSchema);