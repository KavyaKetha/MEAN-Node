/* 
 *  @author : Kavya
 * @purpose : Grunt for watch and starting running node server * 
 */


module.exports = function (grunt) {

    grunt.initConfig({
// configure nodemon
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },
        connect: {
            options: {
                port: 3000,
                open: true,
//                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost',
            }}

    });
    // load nodemon
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    // register the nodemon task when we run grunt
    grunt.registerTask('default', ['nodemon','connect']);
};