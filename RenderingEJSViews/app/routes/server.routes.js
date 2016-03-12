/* 
 *  @author : Kavya
 * @purpose : Rendering ejs file in Node.js  * 
 */

module.exports = function(app){
    app.get('/',function(req,res){
        res.render('index');
    });
};