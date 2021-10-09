const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag:'a'})
}

const {createReadStream} = require('fs');


/*const stream = createReadStream('./content/big.txt', {
    highWaterMark: 90000, 
});

stream.on('data',(result)=>{
    console.log(result);
})
stream.on('error', (err)=>{
    console.log(err);
})*/

//read big data in chunks, default size of chunk is 64kb

var http = require('http')
var fs = require('fs')
const server = http.createServer()

http.createServer((req,res)=>{
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
    fileStream.on('open', ()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error', (err)=>{
        res.end(err)
    })
})

server.listen(5000)
