const http = require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.end('Welcome to home page')
    } else if (req.url === '/about') {
        res.end('Welcome to about page') 
    } else {
        res.end('please return to home oage')
    }
})
server.listen(5000)

