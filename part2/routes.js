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
            //fs.writeFileSync('message.txt',message);  // this is synchronous method wait all lower block code until file opertation not completed(__filename, text to insert) , reliable but slow execution
            fs.writeFile("message.txt",message, err => { //(_filename, text to insert,errHandlingCode) asynchronous method call fileoperation and then move to next block code , faster execution
                res.setStatusCode = 302;
                res.setHeader('location','/');
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