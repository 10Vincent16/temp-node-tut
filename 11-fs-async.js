const {readFile, writeFile, write} = require('fs')

readFile('./content/first.txt', 'utf8', (err,result)=>{
    if (err) {
        console.log(err)
        return
    } else {
        const first = result
        readFile('./content/second.txt','utf8',(err,result)=>{
            if (err) {
                console.log(err)
                return
            } else {
                const second = result
                writeFile('./content/resultant-async.txt', `here is the result ${first}, ${second}`, (err,result)=>{
                    if (err) {
                        console.log(err)
                        return
                    } else {
                        console.log(result)
                    }
                })
            }
        })
    }
})
