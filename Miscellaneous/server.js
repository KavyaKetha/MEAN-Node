/* 
 *  @author : Kavya
 * @purpose : Testing More Node Modules  * 
 */

var isOnline = require('is-online');
var isReachable = require('is-reachable');
isOnline(function (err, online) {
    console.log(online,'online');
});
isReachable('http://google.com/', function(err, reachable) {
    console.log(reachable,'server');//true
});
isReachable('http://agas.cads.com/', function(err, reachable) {
    console.log(reachable,'server');//false
});
