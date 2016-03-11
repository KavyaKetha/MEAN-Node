/* 
 *  @author : Kavya
 * @purpose : Connecting to MongoDB from node.js  * 
 */

var mongoose = require('mongoose'),
        dbConnection = 'mongodb://localhost/local';//your locally configured mongodb url
mongoose.connect(dbConnection, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + dbConnection + '. ' + err);
    } else {
        console.log('Successfully connected to: ' + dbConnection);
    }
});

