const fs = require('fs');
// if file already exists, it will overwrite the content
fs.writeFileSync('example.txt', 'This is an example file created using Node.js file system module.');   
console.log('File created successfully.');
