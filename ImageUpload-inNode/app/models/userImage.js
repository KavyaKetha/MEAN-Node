/* 
 * Creating the Database model Schema
 * */

var mongoose = require('mongoose'),
        Schema = mongoose.Schema;
var UserSchema = new Schema({
    image:{
         data: Buffer,
         contentType: String 
    },
    name:String
});
var userImage = mongoose.model('userImage', UserSchema);
module.exports = userImage;