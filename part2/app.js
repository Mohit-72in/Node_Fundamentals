/*
node js is defined as an open-source, cross-platform runtime environment
that allows developers to execute JavaScript code outside of a web browser.
It is built on the chrome V8 JavaScript engine, which is the same engine 
used by Google Chrome. Node.js is designed to build scalable network applications 
and is particularly well-suited for developing server-side applications.
here are some core modules of node js:
1. HTTP Module: This module allows you to create web servers and handle
HTTP requests and responses.
2. File System (fs) Module: This module provides an API for interacting
with the file system, allowing you to read, write, and manipulate files and directories.
3. Path Module: This module provides utilities for working with file and
 directory paths.
4. Events Module: This module allows you to work with events and event-driven
programming by providing an EventEmitter class.
5.HTTPS Module: This module enables the creation of secure web servers 
using SSL/TLS.
*/ 
const http = require('http');    // import ibuild http core module

const routes = require('./routes');  //import external routes module created in routes.js  -> (./path of file)
console.log(routes.someText);
const server = http.createServer(routes.handler);  // create server using createServer method of http module

server.listen(3000, ()=>{
    console.log('server is listening on port http://localhost:3000/');
});
