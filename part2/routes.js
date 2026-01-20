const fs = require('fs');
const requestHandler = (req,res) => {
    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Message Page</title></head>');
        res.write('<body><form action = "/message" method = "POST"><input type = "text" name = "message"/><br><button type = "submit">send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
       return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            const safeMessage = typeof message === 'string'
              ? decodeURIComponent(message.replace(/\+/g, ' '))
              : '';

            fs.writeFile('message.txt', safeMessage, err => {
                if (err) {
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/plain');
                    return res.end('Failed to save message');
                }
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });

        // })
        // fs.writeFileSync('message.txt','Dummy data inserted');  //(__filename, text to insert)
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();
}
// two export types available

// exports.handler = requestHandler;
// module.exports = {
//     handler: requestHandler,
//     someText: 'Some hard coded text'
// };   

module.exports.handler = requestHandler;
module.exports.someText = 'Some hard coded text';

/*
The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that a single JavaScript thread is used by default — by offloading operations to the system kernel whenever possible.

Since most modern kernels are multi-threaded, they can handle multiple 
operations executing in the background. When one of these operations 
completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.
*/

// npm and package.json
/*
npm (Node Package Manager) is a package manager for JavaScript programming 
language. It is the default package manager for the JavaScript runtime 
environment Node.js. npm is used to install, share, and manage dependencies 
(packages or modules) for Node.js applications.

A package.json file is a JSON (JavaScript Object Notation) file that is
used to manage the dependencies and metadata of a Node.js project. It contains
information about the project, such as its name, version, description, author,
license, and dependencies.
The package.json file is typically created using the npm init command,
which prompts the user to enter information about the project and generates
the file automatically.

what is nodemon?
Nodemon is a utility that automatically restarts a Node.js application 
when it detects changes in the source code files. It is a development tool

what is package-lock.json?
that is automatically generated when you run npm install in a Node.js project.  
It is used to lock the versions of the installed packages and their dependencies,
ensuring that the same versions are used when the project is installed on 
different machines or environments.

You can basically differentiate between:

Global features: Keywords like const or function but also some global objects like process

Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")

Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way

Global features are always available, you don't need to import them into the files where you want to use them.

Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.

Example:

const fs = require('fs');

You can now use the fs object exported by the "fs" module.

Third-party Modules need to be installed (via npm install in the project folder) AND imported.

Example (which you don't need to understand yet - we'll cover this later in the course):

// In terminal/ command prompt
npm install --save express-session
// In code file (e.g. app.js)
const sessions = require('express-session');

The good thing about local dependencies is that you can share projects without the node_modules folder (where they are stored) and you can run npm install in a project to then re-create that node_modules folder. This allows you to share only your source code, hence reducing the size of the shared project vastly.

The attached course code snippets also are shared in that way, hence you need to run npm install in the extracted packages to be able to run my code!

I showed that nodemon app.js would not work in the terminal or command line because we don't use local dependencies there but global packages.

You could install nodemon globally if you wanted (this is NOT required though - because we can just run it locally): npm install -g nodemon would do the trick. Specifically the -g flag ensures that the package gets added as a global package which you now can use anywhere on your machine, directly from inside the terminal or command prompt.
*/