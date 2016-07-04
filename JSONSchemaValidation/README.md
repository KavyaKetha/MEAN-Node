# MEAN-Node

# **JSON Schema Validation**


**$schema**

The $schema keyword is used to declare that a JSON fragment is actually a piece of JSON Schema. It also declares
which version of the JSON Schema standard that the schema was written against.
It is recommended that all JSON Schemas have a $schema entry, which must be at the root. 


**id**


The id property serves two purposes:

• It declares a unique identifier for the schema.

• It declares a base URL against which $ref URLs are resolved

It is best practice that id is a URL, preferably in a domain that you control. For example, if you own the foo.bar

domain, and you had a schema for addresses, you may set its id as follows:

"id": "http://foo.bar/schemas/address.json"

This provides a unique identifier for the schema, as well as, in most cases, indicating where it may be downloaded.

But be aware of the second purpose of the id property: that it declares a base URL for relative $ref URLs elsewhere

in the file. For example, if you had:

{ "$ref": "person.json" }

in the same file, a JSON schema validation library would fetch person.json from

http://foo.bar/schemas/person.json, even if address.json was loaded from the local filesystem.


**$ref**


The symbol (#) refers to the current document, and then the slash (/) separated keys thereafter just traverse
the keys in the objects in the document. Therefore, in our example "#/definitions/address" means:

1. go to the root of the document

2. find the value of the key "definitions"

3. within that object, find the value of the key "address"

$ref can also be a relative or absolute URI, so if you prefer to include your definitions in separate files, you can also
do that


The keywords used to combine schemas are:


• allOf : Must be valid against all of the subschemas

• anyOf : Must be valid against any of the subschemas

• oneOf : Must be valid against exactly one of the subschemas

• not : Must not be valid against the given schema

All of these keywords must be set to an array, where each item is a schema.

Example:

{

    "allOf": [

        { "type": "string" },

        { "type": "number" }

    ]

}


 **Type:**

At its core, JSON Schema defines the following basic types:

• string 

• Numeric types (number,integer)

• object 

• array 

• boolean 

• null 

Example:

{

    "type": "string",

    "minLength": 2,

    "maxLength": 3

}

{ 

    "type": "number",

    "minimum": 0,

    "maximum": 100,

    "exclusiveMaximum": true

}

{

    "type": "object",

    "properties": {

        "number": { "type": "number" },

        "street_name": { "type": "string" },

        "street_type": {

             "type": "string",

             "enum": ["Street", "Avenue", "Boulevard"]

        }

    },

    "required": ["street_name", "street_type"],

    "minProperties": 2,

    "maxProperties": 3

}


**Built-in formats**


The following is the list of formats specified in the JSON Schema specification.

• "date-time": Date representation.

• "email": Internet email address.

• "hostname": Internet host name.

• "ipv4": IPv4 address.

• "ipv6": IPv6 address,.

• "uri": A universal resource identifier (URI).

Reference from : https://spacetelescope.github.io/understanding-json-schema/UnderstandingJSONSchema.pdf