// const events=require('events');
import events from 'events'
const eventEmitter=new events.EventEmitter();

eventEmitter.on('myevent',(arg)=>{
    console.log(`the myevent occured :name:${arg.name} and age:${arg.age}`);
})
let obj={
    name:'Sunil',
    age:32
}
eventEmitter.emit('myevent',obj)