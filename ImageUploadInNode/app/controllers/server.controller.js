/* 
 *  @author : Kavya
 * @purpose : MongoDB Operations * 
 */

var path = require('path'),
    formidable = require('formidable'),
    userImage = require('../models/userImage.js'),
    fs   = require('fs-extra');
exports.renderIndexPage = function (req, res) {
    res.sendFile(path.join(__dirname + '../../../public/views/index.html'));
    //__dirname : It will resolve to your project folder.
};

exports.addUserDetails = function (req, res) {
    console.log('request reached', req.body);
    var formdata = new formidable.IncomingForm();
    formdata.parse(req, function (err, fields, files) {
        console.log('here');
    });
    formdata.on('field', function (name, value) {
        console.log('field', name, value);
    });
    formdata.on('file', function (name, value) {
        console.log('file', name, value);
    });
    formdata.on('end', function (fields, files) {
        console.log('on end ',fields,files);
        console.log('files opened ' + this.openedFiles);
        for (var x in this.openedFiles)
        {
            var temp_path = this.openedFiles[x].path;
            /* The file name of the uploaded file */
            var file_name = this.openedFiles[x].name;

            var file_size = this.openedFiles[x].size;
            console.log('size ' + file_size);
            var userImg = new userImage();
//            userImg.image = 
        }
    });

};
