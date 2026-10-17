const path = require('path')

console.log(path.sep) //prints the separator from the path - '\'

const filePath = path.join('/content/', 'subfolder', 'app.jsx')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)