# MEAN-Node

# **Offline-npm**

Hassle-free npm pack including all dependencies for offline installation with npm install

Add offline-npm to your project to serve a npm compatible tgz file wich contains all dependencies for offline installation with npm install.

If you want to use your local npm cache to install packages from use the option

**offline-npm -n [-d]**



1.Prepare your project for offline use

 offline-npm --add

This changes the package.json file and adds a offline folder which will contain all your dependencies.

2.Pack your project

 npm pack

Now the local cache is changed and all your projects dependencies will be downloaded into offline/cache and packed into the npm tgz file.

    Note: Take care not to add a global *.tgz into your .npmignore file!

    Note: An existing npm-shrinkwrap.json file will get overwritten in this step to provide install without the --registry switch. A backup is stored in the ./offline folder.

Transfer the resulting <name>-<version>.tgz from the pack command onto a machine with no connectivity to the required registry. Execute this line from a terminal.

3.Now install the package with:

 npm install [-g] <name>-<version>.tgz

