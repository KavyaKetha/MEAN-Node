# MEAN-Node

# **REST API , MongoDB CRUD Operations and Angular Routing using UI-Router**

 **MongoDB CRUD**

save() -Inserts a document and returns a WriteResult object that contains the status of the insert or update operation.

insert() - Inserts a document or documents into a collection and returns a WriteResult object that contains the status of the operation. Upon success, the WriteResult object contains information on the number of documents inserted.

save behaves differently if it is passed with an "_id" parameter.

If the document contains an _id field, then the save() method performs an upsert querying the collection on the _id field.

If a document does not exist with the specified _id value, the save() method performs an insert with the specified fields in the document.

If a document exists with the specified _id value, the save() method performs an update, replacing all field in the existing record with the fields from the document.

update() - Updates the existing documents. The update() method returns a WriteResult object that contains the status of the operation. Upon success, the WriteResult object contains the number of documents that matched the query condition, the number of documents inserted by the update, and the number of documents modified.

find() -The find() method with no parameters returns all documents from a collection and returns all fields for the documents.

remove() - By default, remove() removes all documents that match the query expression.

