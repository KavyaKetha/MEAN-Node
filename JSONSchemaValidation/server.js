/* 
 *  @author : Kavya
 * @purpose : JSON Schema Validation  * 
 */


// Require FileSystem
 var  fs = require('fs');

// Require package
var validate = require('commonjs-utils/lib/json-schema').validate;

// Load a schema by which to validate
fs.readFile('jsonSchema.json',function(err,schemadata) {
	if(err) throw err;
	var schema = JSON.parse(schemadata);
	// Load data file
	fs.readFile('./data.json',function(err,jsondata) {
		if(err) throw err;
		// Parse as JSON
		var posts = JSON.parse(jsondata);
                console.log(posts,'data here');
		// Validate
		var validation = validate(posts, schema);
		// Echo to command line
		console.log('The result of the validation:  ',validation.valid);
	});
});
