# MEAN-Node

# **Getting Started**

# MEAN ( MongoDB, Express, Angular.js , Node.js )

MongoDB is a non-relational No-SQL database which stores complex objects in JSON, XML, BSON, or many other similar formats that are better suited to your application.

Express is a framework that helps organize web apps on the server side.

Angular JS is a JavaScript framework built for fast and dynamic front-end development. Two of the major features of Angular are data binding and dependency injection. Data binding deals with how we handle data in our applications while dependency injection deals more with how we architect them.


Node.js is an open source, cross-platform runtime environment for developing server-side applications.

**Server Components**

• Database (MongoDB)

• Server/API (Node and Express)

**Client Components**

• Frontend Layer (Angular)


**# Installation:**

**on Windows**

**_Installing Node.js_**

Goto  https://nodejs.org/en/download/  and download the right .msi file. Notice there are
32-bit and 64-bit versions, so make sure you download the right one for your system.After downloading the installer, run it.

**_Installing Mongo DB_**

Goto https://www.mongodb.org/downloads#production. Once you have downloaded the right version, unpack the archive file, and move the
folder to C:\mongodb . MongoDB uses a default folder to store its files. 
On Windows, the default location is C:\data\db , so in the command prompt, go to C:\ and issue the following command


md data\db
  
OrElse You can create a folder data in c:\ and create another folder named db in data

C:\mongodb\bin\mongod.exe

**on ubuntu**

**_Installing Node.js_**

curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -

sudo apt-get install -y nodejs

sudo apt-get install -y build-essential

**_Installing MongoDB_**

sudo mkdir -p /data/db/

sudo chown `id -u` /data/db

sudo apt-get install -y mongodb

mongod command will run the mongo instance.

you will need to locate the mongod binary, which is usually located in the bin folder. The mongod process runs the main MongoDB server process, which can be used as a standalone server.
The mongod process requires a folder to store the database files in (the default folder
is /data/db ) and a port to listen to (the default port is 27017 ).


