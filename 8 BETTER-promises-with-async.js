const {readFile, writeFile} = require('fs')
const util = require('util')   // Node.js's built-in util module. It provides utilities to convert callback-based functions into Promise-based functions.
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

// this WAY we converts a standard callback-based function into a promise based function
// this allows us to handle older asynchronous Node.js APIs using modern async/await syntax instead of nesting callbacks
 // see it does all of that in just 11 lines as compared to all the stuff commented below
const start = async() => {
    try { 
        const first  = await readFilePromise('./content/first.txt', 'utf-8')
        const second  = await readFilePromise('./content/seconds.txt', 'utf-8')
        await writeFilePromise(
            './content/result-mind-grenade.txt',
            `THIS IS FUCKING AWESOME ${first} ${second}` 
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

