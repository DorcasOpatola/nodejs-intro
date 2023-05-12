const fs = require('fs')

// Synchronous operation, a.k.a. Blocking code: It is a top level code that blocks the callstack.
// This implies that, when JS gets to the line of synchronous code, it completes the command written there before moving on to another line of code.
// It doesn't take a callback, only takes the file path.
fs.readFileSync("/docs/newfile.json")


// Async-await
// Asynchronous operation
fs.writeFile("/docs/newfile.txt", "Hello Backend", (err,data) => {
    if (err) console.log(err)
    console.log(data)
    fs.readFile("/docs/newfile.txt", "utf-8", (err,data) => {
        if (err) console.log(err)
        console.log(data)
        fs.writeFile("/docs/newfile.txt", "Hello World", (err,data) => {
            if (err) console.log(err)
            console.log(data)
            fs.readFile("/docs/newfile.txt", "node-247", (err,data) => {
                if (err) console.log(err)
                console.log(data)
            })
        })
    })
})

