const os = require('os')

//infor about current user

const user = os.userInfo()
console.log(user)


//returns system uptime in seconds

console.log(`the system is uptime is ${os.uptime}`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)