# MEAN-Node

# **Rendering ejs file in Node.js**

 **Bodyparser**

Body-parser will take the body of your request and parse it to whatever you want your server to receive in POST/PUT requests (JSON, URL encoded, text, raw).
The only problem with body-parser is that you can't handle multipart bodies (which are commonly uploads). For the multipart data you can use formidable,busy-boy,..

bodyparser.json() - Returns middleware that only parses json.

bodyparser.raw() - Returns middleware that parses all bodies as a Buffer.

bodyparser.urlencoded() - Returns middleware that only parses urlencoded bodies.

bodyparser.text() - Returns middleware that parses all bodies as a string.

 **Morgan**

Morgan is used for logging requests.