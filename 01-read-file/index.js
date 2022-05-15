const fs = require('fs');
const path = require('path');
const readableStream = fs.createReadStream('text.txt','utf-8');
readableStream.on('data', chunk => console.log(chunk));
readableStream.on('error', error => console.log('error'));
