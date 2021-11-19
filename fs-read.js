let fs=require('fs')
// import fs from 'fs'
//asynchronous
fs.readFile('notes.txt',(err,data)=>{
    debugger;
    if(err) throw err;
    console.log(data.toString());
})
//synchronous
// let data=fs.readFileSync('notes.txt').toString();
// console.log(data);