// const events=require('events');

import events from 'events'
const eventEmitter=new events.EventEmitter();
//Define Methods
let method1=()=>console.log("Event 1");
let method2=()=>console.log("Event 2");
//add event in the listener
eventEmitter.on('myevent',method1);
eventEmitter.on('myevent',method2);
//fire the named  event
eventEmitter.emit('myevent');
//remove the listener
eventEmitter.removeListener('myevent',method1);
eventEmitter.emit('myevent');