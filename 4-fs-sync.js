const {readFileSync, writeFileSync} = require('fs')
//This line of code does two things at once: it imports Node.js's built-in file system tool and extracts only the specific features you need.

const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/seconds.txt','utf-8')
// console.log(first)

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}` ,   
     {flag : 'a'}
    )

console.log('done with this')