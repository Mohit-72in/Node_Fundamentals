// NodeJS is a runtime environment for executing JavaScript outside the 
// browser, built on the V8 JavaScript engine. It enables server-side 
// development, supports asynchronous, event-driven programming, and 
// efficiently handles scalable network applications.
/*
Key Features and Concepts
Runtime Environment, not a Language or Framework: Node.js is not a new programming language, but rather an environment where the existing JavaScript language can run on the server side (backend), using Google Chrome's high-performance V8 JavaScript engine to compile code into native machine code.
Asynchronous and Event-Driven: Node.js uses an event-driven, non-blocking I/O (Input/Output) model. This allows it to handle many concurrent connections efficiently without waiting for one task (like a database query or file read) to complete before moving to the next, which is ideal for data-intensive real-time applications such as chat apps or streaming services.
Single-Threaded Model: It operates on a single thread but manages concurrency through an event loop mechanism, avoiding the overhead of managing multiple threads as in traditional server models.
NPM (Node Package Manager): Node.js comes bundled with npm, the largest ecosystem of open-source libraries and packages in the world. This allows developers to easily install and manage third-party tools and modules, significantly speeding up development.
Full-Stack JavaScript: Node.js enables developers to use a single programming language, JavaScript, for both client-side (frontend) and server-side (backend) development, which streamlines the overall process and promotes code reuse. 

Common Use Cases:
Node.js is well-suited for a variety of applications, including: 
Building web servers and APIs (Application Programming Interfaces)
Real-time applications, such as online chat, gaming, and collaboration tools
Streaming services (e.g., Netflix uses Node.js for data streaming)
Single-Page Applications (SPAs) that work with frameworks like React or Angular
Command-line tools and scripts 
*/
const a = 4;
const b = 7;
const sum = a+b;
console.log("The sum of a and b is: " + sum);