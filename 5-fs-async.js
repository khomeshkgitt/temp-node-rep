const {readFile, writeFile} = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result)=> {
    if(err) {
        console.log(err)
        return
    }
    const first = result

    readFile('./content/seconds.txt', 'utf-8', (err, result)=> {
        if(err) {
            console.log(err)
            return
        }
        const second = result

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}` ,
            (err, result) => {
             if(err) {
                console.log(err)
                return
            }
            console.log('done with this as well')
        }
        )
})
})
console.log('Starting nmext task')
// as this is asynchronous the reading files is done and after that immediately the line30 gets printed in the console
// while this was  printing the content was getting written 