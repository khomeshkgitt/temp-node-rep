import fs from 'node:fs/promises' // this is using the ES modules(ECMA)
// const {readFile, writeFile} = require('fs').promises // this is the old way 
// const util = require('util')   // Node.js's built-in util module. It provides utilities to convert callback-based functions into Promise-based functions.
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// this si the easiest way as Node.js already provides a built-in promises API in the fs module since Node.js v10+.
// This means you can directly use fs.promises to get Promise-based versions of file system functions.
// const start = async() => {
//     try { 
//         const first  = await readFile('./content/first.txt', 'utf-8')
//         const second  = await readFile('./content/seconds.txt', 'utf-8')
//         await writeFile(
//             './content/result-mind-grenade.txt',
//             `THIS IS FUCKING AWESOME ${first} ${second}` , {flag : 'a'} 
//         )
//         console.log(first, second)
//     } catch (error) {
//         console.log(error)
//     }
// }

const start = async() => {
    try { 
        const first  = await fs.readFile('./content/first.txt', 'utf-8')
        const second  = await fs.readFile('./content/seconds.txt', 'utf-8')
        await fs.writeFile(
            './content/result-mind-grenade.txt',
            `THIS IS FUCKING AWESOME ${first} ${second}` , {flag : 'a'} 
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()

// const getText = (path) => {
//     return new Promise ((resolve, reject) => {
//         readFile(path, 'utf-8' , (err,data) => {
//             if(err)
//                 reject(err)
//             else
//                 resolve(data)
//         })
//     })
// }

// const start = async ()  => {
//     try {
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/seconds.txt')
//         console.log(first, second)
//     }  catch (error) {
//         console.log(error)
//     }
// }

