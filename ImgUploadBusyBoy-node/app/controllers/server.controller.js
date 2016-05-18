/* 
 *  @author : Kavya
 * @purpose : MongoDB Operations * 
 */

var path = require('path'),
    formidable = require('formidable'),
    userImage = require('../models/userImage.js'),
    fs   = require('fs');
exports.renderIndexPage = function (req, res) {
    res.sendFile(path.join(__dirname + '../../../public/views/index.html'));
    //__dirname : It will resolve to your project folder.
};

exports.addUserDetails = function (req, res) {
    var formdata = new formidable.IncomingForm();
    formdata.parse(req, function (err, fields, files) {
    });
    formdata.on('field', function (name, value) {
    });
    formdata.on('file', function (name, value) {
    });
    formdata.on('end', function (fields, files) {
        
        for (var x in this.openedFiles)
        {
            var temp_path = this.openedFiles[x].path;
            /* The file name of the uploaded file */
            var file_name = this.openedFiles[x].name;

            var file_size = this.openedFiles[x].size;
            var file_type = this.openedFiles[x].type;
            var userImg = new userImage();
            var imageData = fs.readFileSync(temp_path);
            userImg.image.data = imageData;
            userImg.image.contentType = file_type;
            userImg.name = file_name;
            userImg.save(function(err,userObj){
                if(err){
                    console.log(err,'error');
                    res.json(err);
                }
                else{
                    res.send('Inserted the Image');
                }
            });
        }
    });

};
