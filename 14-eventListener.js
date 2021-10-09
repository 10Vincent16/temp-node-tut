const eventEmitter = require('events');

const customEmitter = new eventEmitter()

customEmitter.on('response',(name,age)=>{
    console.log(`data received ${name} with ${age}`);
})
customEmitter.on('response',()=>{
    console.log(`some other logic here `);
})
customEmitter.emit('response','john',34)