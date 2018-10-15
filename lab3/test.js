const fs = require('fs');

let fileContents = fs.readFileSync('test.txt', 'utf-8');
let fileContentsArr = fileContents.split('\n');
fileContentsArr = fileContentsArr.map(d => d.trim())

console.log(fileContentsArr);