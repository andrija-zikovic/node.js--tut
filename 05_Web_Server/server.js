const logEvents = require('./logEvents')

const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

// initialize object
const myEmmiter = new MyEmitter();

// add listener for log event
myEmmiter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //Emit event
    myEmmiter.emit('log', 'Log event emitted!')
}, 2000);